/**
 * build.js — 构建 @silenthill/agreement-web npm 包
 *
 * 从 holdem/pb/ 目录（从 GitLab 同步的 google-protobuf 生成文件）构建四个产物：
 *
 *   dist/holdem-pb.js   UMD runtime bundle（内联 google-protobuf 内核 + 274 个 pb 模块）
 *   dist/proxy.js       UMD proxy layer（从 window.HoldemPB 代理 527 个运行时符号）
 *   dist/index.d.ts     自包含 TypeScript 类型声明（合并 274 个 .d.ts，不引用 holdem/pb/）
 *   dist/global.d.ts    Window.HoldemPB 全局类型增强
 *
 * 运行环境要求：
 *   - Node.js >= 18
 *   - npm install 已执行（google-protobuf 在 dependencies 中，esbuild 在 devDependencies 中）
 *
 * 用法：
 *   npm run build
 *
 * 跨平台说明：
 *   - 所有路径使用 path.join / path.resolve，兼容 Windows / Linux / macOS
 *   - 正则使用 / 作为分隔符（独立于平台）
 */

const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// ============================================================================
// 辅助函数 — 格式化内联枚举值的缩进
//
// 输入 rawValue: 从 .js 文件提取的枚举对象字面量，如：
//   "{\n  NONE: 0,\n  MSG_D_REGISTER: 1,\n  ...\n};"
//
// 输出：统一缩进的字符串，body 行 4 空格，闭合花括号 2 空格
//   "{\n    NONE: 0,\n    MSG_D_REGISTER: 1,\n    ...\n  };"
// ============================================================================
function formatEnumBody(raw) {
  const lines = raw.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  // lines[0] = "{", lines[1..n-2] = body, lines[n-1] = "};"
  const result = [];
  result.push(lines[0]); // {
  for (let i = 1; i < lines.length - 1; i++) {
    result.push('    ' + lines[i]); // 4-space indent
  }
  result.push('  ' + lines[lines.length - 1]); // 2-space indent };
  return result.join('\n');
}

// ============================================================================
// 常量 — 跨平台路径
// ============================================================================
const ROOT = path.resolve(__dirname, '..');
const PB_DIR = path.join(ROOT, 'holdem', 'pb');
const DIST_DIR = path.join(ROOT, 'dist');

console.log('[build] Root:', ROOT);
console.log('[build] PB dir:', PB_DIR);
console.log('[build] Dist dir:', DIST_DIR);

// 确保输出目录存在
if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR, { recursive: true });
}

// ============================================================================
// Step 1: buildRuntime() — 生成 dist/holdem-pb.js（UMD runtime）
//
// 使用 esbuild 将所有 pb 模块 + google-protobuf 打包成一个 IIFE，
// 然后包裹 UMD wrapper（支持 AMD / CJS / browser global 三种加载方式）。
//
// 关键问题：pb 模块内的跨文件 require 路径写死为
//   require('../../protobuf/holdem/xxx.js')
// 但这些路径在我们的仓库中不存在。解决方式：
//   通过 esbuild onResolve 插件将这类 require 重定向到 holdem/pb/xxx.js。
//
// 由于所有模块使用全局 proto.holdem.pb 命名空间通信（通过 goog.exportSymbol），
// 不需要真正的模块隔离 —— esbuild 的 CommonJS 互操作恰好满足这一点。
// ============================================================================
async function buildRuntime() {
  console.log('[build] Building dist/holdem-pb.js ...');

  // 收集所有 .js 文件，按依赖顺序排序
  //   0: define_pb.js              (基础类型，无模块间依赖)
  //   1: define_{cb,ft,gd,mj}_pb.js (各游戏扩展类型，依赖 define_pb)
  //   2: code_pb.js                (消息码枚举，无模块间依赖)
  //   3: req_*.js                  (客户端请求消息)
  //   4: recv_*.js                 (服务端响应消息)
  const jsFiles = fs.readdirSync(PB_DIR)
    .filter(f => f.endsWith('.js'))
    .sort((a, b) => {
      const order = (name) => {
        if (name === 'define_pb.js') return 0;
        if (name.startsWith('define_')) return 1;
        if (name === 'code_pb.js') return 2;
        if (name.startsWith('req_')) return 3;
        if (name.startsWith('recv_')) return 4;
        return 5;
      };
      const oa = order(a);
      const ob = order(b);
      if (oa !== ob) return oa - ob;
      return a.localeCompare(b);
    });

  console.log('[build]   Found', jsFiles.length, '.js files');

  // 创建临时入口文件，告诉 esbuild 需要打包哪些模块
  // 放在项目根目录以确保 resolveDir 正确
  const entryPath = path.join(ROOT, '__build_entry__.js');
  const entryContent = [
    'require(\'google-protobuf\');',
    ...jsFiles.map(f => `require('./holdem/pb/${f}');`)
  ].join('\n');

  fs.writeFileSync(entryPath, entryContent);

  // esbuild 路径重映射插件
  // 将 require('../../protobuf/holdem/define_pb.js') 映射到
  //    path/to/holdem/pb/define_pb.js
  const pbRemapPlugin = {
    name: 'pb-path-remap',
    setup(build) {
      build.onResolve({ filter: /protobuf\/holdem\/.*\.js$/ }, (args) => {
        const basename = path.basename(args.path);
        const resolved = path.resolve(ROOT, 'holdem', 'pb', basename);
        return { path: resolved };
      });
    },
  };

  let core;
  try {
    const result = await esbuild.build({
      entryPoints: [entryPath],
      bundle: true,
      format: 'iife',       // 输出为 IIFE，方便包裹 UMD
      platform: 'browser',   // 目标平台为浏览器
      write: false,          // 不写文件，手动处理
      plugins: [pbRemapPlugin],
      logLevel: 'warning',
      minify: true,
    });
    core = result.outputFiles[0].text;
  } finally {
    // 清理临时入口文件
    if (fs.existsSync(entryPath)) {
      fs.unlinkSync(entryPath);
    }
  }

  // esbuild IIFE 输出格式为：
  //   (() => { ... })();
  // 或 "use strict";\n(() => { ... })();
  // 剥离此包装，提取内部代码体，放入 UMD 工厂函数
  let body = core
    .replace(/^"use strict";\s*/s, '')
    .replace(/^\(\(\)\s*=>\s*\{/s, '')
    .replace(/\}\)\(\);?\s*$/s, '')
    .trim();

  // UMD 包装 — 支持三种加载方式：
  //   1. AMD:        define([], factory)
  //   2. CJS/Node:   module.exports = factory()
  //   3. Browser:    window.HoldemPB = factory()
  // UMD factory 内部执行 google-protobuf + pb 模块代码，
  // 返回 proto.holdem.pb （所有 protobuf 类的扁平字典）
  const umd = [
    '(function(root, factory) {',
    '  if (typeof define === \'function\' && define.amd) {',
    '    define([], factory);',
    '  } else if (typeof module === \'object\' && typeof module.exports === \'object\') {',
    '    module.exports = factory();',
    '  } else {',
    '    root.HoldemPB = factory();',
    '  }',
    '}(typeof self !== \'undefined\' ? self : this, function() {',
    '  \'use strict\';',
    '',
    body,
    '',
    '  return proto.holdem.pb;',
    '}));',
    ''
  ].join('\n');

  fs.writeFileSync(path.join(DIST_DIR, 'holdem-pb.js'), umd);
  console.log('[build]   dist/holdem-pb.js done');
}

// ============================================================================
// Step 2: buildProxy() — 生成 dist/proxy.js（UMD proxy）
//
// 从所有 .js 文件中提取运行时注册到 proto.holdem.pb.* 上的符号，
// 生成一个 UMD 文件，将这些符号重新导出为扁平命名导出。
//
// 提取策略（基于 .js 文件内容，比 .d.ts 更准确）：
//   1. goog.exportSymbol('proto.holdem.pb.ClassName', ...) → class 构造函数
//   2. proto.holdem.pb.EnumName = { ... }                    → 枚举/常量映射
//
// 导出方式按符号类型区分：
//   enum  → 内联值 exports.Foo = { ... }
//     enum 经常在模块顶层做静态映射表（如 [Code.MSG_XXX]: ...），
//     必须在 import 时立即可用，不能懒加载
//   class → Object.defineProperty 惰性 getter
//     避免 Cocos IDE 中 holdem-pb.js 未加载时 new Foo() 报错
// ============================================================================
function buildProxy() {
  console.log('[build] Building dist/proxy.js ...');

  // 分离收集：先收 enum（内联），再收 class（lazy），enum 优先
  const classNames = new Set();
  const enumValues = new Map();

  const jsFiles = fs.readdirSync(PB_DIR).filter(f => f.endsWith('.js'));

  // 第一遍：提取枚举值（proto.holdem.pb.XXX = { ... };）
  //   enum 经常在模块顶层做静态映射表，必须 import 时立即可用
  for (const file of jsFiles) {
    const content = fs.readFileSync(path.join(PB_DIR, file), 'utf8');

    const assignRe = /proto\.holdem\.pb\.(\w+)\s*=\s*\{/g;
    let match;
    while ((match = assignRe.exec(content)) !== null) {
      const enumName = match[1];
      if (enumValues.has(enumName)) continue;

      // 找到匹配 } 和 }; — 枚举值从 { 到 };
      const openPos = match.index + match[0].length - 1;
      let depth = 1;
      let closePos = openPos + 1;
      while (depth > 0 && closePos < content.length) {
        if (content[closePos] === '{') depth++;
        else if (content[closePos] === '}') depth--;
        closePos++;
      }
      while (closePos < content.length && /[;\s]/.test(content[closePos])) {
        closePos++;
      }

      const rawValue = content.substring(openPos, closePos).trim();
      // 只内联扁平枚举（值中无嵌套 {），排除嵌套结构
      if (!/:\s*\{/.test(rawValue)) {
        enumValues.set(enumName, rawValue);
      }
    }
  }

  // 第二遍：提取 class 符号（goog.exportSymbol，排除已归入 enum 的）
  for (const file of jsFiles) {
    const content = fs.readFileSync(path.join(PB_DIR, file), 'utf8');

    const exportRe = /goog\.exportSymbol\('proto\.holdem\.pb\.(\w+)'/g;
    let match;
    while ((match = exportRe.exec(content)) !== null) {
      if (!enumValues.has(match[1])) {
        classNames.add(match[1]);
      }
    }
  }

  // class 按字母排序，enum 也排序
  const sortedClasses = [...classNames].sort();
  const sortedEnums = [...enumValues.keys()].sort();
  console.log('[build]   Found', sortedClasses.length, 'classes (lazy) +', sortedEnums.length, 'enums (inline)');

  // enum 内联行 — 格式化 body 缩进，确保可读
  const inlineLines = sortedEnums.map(name => {
    const raw = enumValues.get(name);
    const formatted = formatEnumBody(raw);
    return `  exports.${name} = ${formatted}`;
  });

  // class 惰性行 — lazy('ClassName');
  const lazyLines = sortedClasses.map(name =>
    `  lazy('${name}');`
  );

  // UMD 包装（与 runtime 相同结构，CJS 分支传入 module.exports）
  const proxy = [
    '(function(root, factory) {',
    '  if (typeof define === \'function\' && define.amd) {',
    '    define([], factory);',
    '  } else if (typeof module === \'object\' && typeof module.exports === \'object\') {',
    '    module.exports = factory(module.exports);',
    '  } else {',
    '    root.HoldemPBProxy = factory(root.HoldemPBProxy || {});',
    '  }',
    '}(typeof self !== \'undefined\' ? self : this, function(exports) {',
    '  \'use strict\';',
    '',
    '  // 获取 window.HoldemPB（惰性 — 可能尚未加载）',
    '  function getPB() {',
    '    return (typeof window !== \'undefined\' ? window : global).HoldemPB;',
    '  }',
    '',
    '  // class 构造函数：惰性 getter，首次访问时才解析',
    '  function lazy(name) {',
    '    var val, resolved = false;',
    '    Object.defineProperty(exports, name, {',
    '      get: function() {',
    '        if (!resolved) {',
    '          var pb = getPB();',
    '          val = pb ? pb[name] : undefined;',
    '          resolved = true;',
    '        }',
    '        return val;',
    '      },',
    '      configurable: true,',
    '      enumerable: true',
    '    });',
    '  }',
    '',
    '  // enum / 常量映射 — 内联值，import 时立即可用',
    ...inlineLines,
    '',
    '  // class 构造函数 — 惰性加载',
    ...lazyLines,
    '',
    '  return exports;',
    '}));',
    ''
  ].join('\n');

  fs.writeFileSync(path.join(DIST_DIR, 'proxy.js'), proxy);
  console.log('[build]   dist/proxy.js done');
}

// ============================================================================
// Step 3: buildDts() — 生成 dist/index.d.ts（自包含类型声明）
//
// 将 274 个 .d.ts 文件合并为一个独立的类型声明文件。
// 因为 npm 只发布 dist/ 目录（不发布 holdem/pb/），所以必须在构建时内联。
//
// 处理逻辑：
//   1. 移除模块间 import（如 import * as X from "../../protobuf/holdem/yyy"）
//      记录别名 → 方便后续替换
//   2. 只保留一处 import * as jspb from "google-protobuf"（放在文件头）
//   3. 将所有 alias.ClassName 类型引用替换为 ClassName（因为 ClassName 已在同一文件中）
//   4. 清理注释、多余空行
// ============================================================================
function buildDts() {
  console.log('[build] Building dist/index.d.ts ...');

  const dtsFiles = fs.readdirSync(PB_DIR)
    .filter(f => f.endsWith('.d.ts'))
    .sort();

  const allParts = [];
  let jspbImportAdded = false;

  for (const file of dtsFiles) {
    let content = fs.readFileSync(path.join(PB_DIR, file), 'utf8');

    // 第一步：提取模块间 import 的别名
    //   格式：import * as alias from "../../protobuf/holdem/filename"
    const importAliases = [];
    const importRe = /^import\s+\*\s+as\s+(\w+)\s+from\s+['"]\.\.\/\.\.\/protobuf\/holdem\/(\w+)['"];?\s*$/gm;
    let match;
    while ((match = importRe.exec(content)) !== null) {
      importAliases.push({ alias: match[1], from: match[2] });
    }

    // 第二步：移除所有模块间 import（符号在合并后由其他段提供）
    content = content.replace(importRe, '');

    // 第三步：合并 google-protobuf import — 整个文件只留一处
    content = content.replace(/^import\s+\*\s+as\s+jspb\s+from\s+['"]google-protobuf['"];?\s*$/gm, () => {
      if (!jspbImportAdded) {
        jspbImportAdded = true;
        return 'import * as jspb from "google-protobuf";';
      }
      return '';
    });

    // 第四步：清理噪音 — 由 protoc 生成的包注释和文件注释
    content = content.replace(/^\/\/\s*package:.*$/gm, '');
    content = content.replace(/^\/\/\s*file:.*$/gm, '');

    // 第五步：移除类型引用中的别名前缀
    //   例：protobuf_holdem_define_pb.Room → Room
    for (const { alias } of importAliases) {
      // 转义别名以安全构建正则
      const aliasRef = new RegExp('\\b' + alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\.', 'g');
      content = content.replace(aliasRef, '');
    }

    // 第六步：压缩多余空行（保留单个空行分隔）
    content = content.replace(/\n{3,}/g, '\n\n');

    const trimmed = content.trim();
    if (trimmed) {
      allParts.push(trimmed);
    }
  }

  const result = allParts.join('\n\n') + '\n';
  fs.writeFileSync(path.join(DIST_DIR, 'index.d.ts'), result);
  console.log('[build]   dist/index.d.ts done');
}

// ============================================================================
// Step 4: buildGlobalDts() — 生成 dist/global.d.ts
//
// 为 TypeScript 声明 Window.HoldemPB 的类型。
// 当代码直接访问 window.HoldemPB 时，TypeScript 能提供正确的类型推导。
// ============================================================================
function buildGlobalDts() {
  console.log('[build] Building dist/global.d.ts ...');

  const content = [
    'import * as PB from \'./index\';',
    '',
    'declare global {',
    '  interface Window {',
    '    HoldemPB: typeof PB;',
    '  }',
    '}',
    '',
    'export {};',
    ''
  ].join('\n');

  fs.writeFileSync(path.join(DIST_DIR, 'global.d.ts'), content);
  console.log('[build]   dist/global.d.ts done');
}

// ============================================================================
// 主流程
// ============================================================================
async function main() {
  try {
    // Step 1 是异步的（esbuild.build 返回 Promise）
    await buildRuntime();
    // Step 2-4 是纯同步操作（文件读写 + 字符串处理）
    buildProxy();
    buildDts();
    buildGlobalDts();
    console.log('[build] All done!');
  } catch (err) {
    console.error('[build] ERROR:', err.message || err);
    process.exit(1);
  }
}

main();
