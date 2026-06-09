const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// Cross-platform path resolution
const ROOT = path.resolve(__dirname, '..');
const PB_DIR = path.join(ROOT, 'holdem', 'pb');
const DIST_DIR = path.join(ROOT, 'dist');

console.log('[build] Root:', ROOT);
console.log('[build] PB dir:', PB_DIR);
console.log('[build] Dist dir:', DIST_DIR);

// Ensure dist directory exists
if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR, { recursive: true });
}

// ---------------------------------------------------------------------------
// Step 1: Build dist/holdem-pb.js (UMD runtime with google-protobuf inlined)
// ---------------------------------------------------------------------------
async function buildRuntime() {
  console.log('[build] Building dist/holdem-pb.js ...');

  // Collect all .js files (skip .d.ts)
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

  // Create temporary entry file in project root for correct resolveDir
  const entryPath = path.join(ROOT, '__build_entry__.js');
  const entryContent = [
    'require(\'google-protobuf\');',
    ...jsFiles.map(f => `require('./holdem/pb/${f}');`)
  ].join('\n');

  fs.writeFileSync(entryPath, entryContent);

  // esbuild plugin to remap inter-module require paths
  // Example: require('../../protobuf/holdem/define_pb.js') -> ./holdem/pb/define_pb.js
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
      format: 'iife',
      platform: 'browser',
      write: false,
      plugins: [pbRemapPlugin],
      logLevel: 'warning',
    });
    core = result.outputFiles[0].text;
  } finally {
    // Clean up temporary entry file
    if (fs.existsSync(entryPath)) {
      fs.unlinkSync(entryPath);
    }
  }

  // Strip esbuild's IIFE wrapper and replace with UMD
  // esbuild output format: (() => { ... })();
  // or: "use strict";\n(() => { ... })();
  let body = core
    .replace(/^"use strict";\s*/s, '')
    .replace(/^\(\(\)\s*=>\s*\{/s, '')
    .replace(/\}\)\(\);?\s*$/s, '')
    .trim();

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

// ---------------------------------------------------------------------------
// Step 2: Build dist/proxy.js (UMD proxy that reads from window.HoldemPB)
// ---------------------------------------------------------------------------
function buildProxy() {
  console.log('[build] Building dist/proxy.js ...');

  const symbols = new Set();

  // Extract runtime symbols from .js files (more accurate than .d.ts)
  const jsFiles = fs.readdirSync(PB_DIR).filter(f => f.endsWith('.js'));

  for (const file of jsFiles) {
    const content = fs.readFileSync(path.join(PB_DIR, file), 'utf8');

    // goog.exportSymbol('proto.holdem.pb.ClassName', null, global)  -> class
    const exportRe = /goog\.exportSymbol\('proto\.holdem\.pb\.(\w+)'/g;
    let match;
    while ((match = exportRe.exec(content)) !== null) {
      symbols.add(match[1]);
    }

    // proto.holdem.pb.EnumName = { ... }  -> enum / const map
    const assignRe = /proto\.holdem\.pb\.(\w+)\s*=\s*\{/g;
    while ((match = assignRe.exec(content)) !== null) {
      symbols.add(match[1]);
    }
  }

  const sortedNames = [...symbols].sort();
  console.log('[build]   Found', sortedNames.length, 'runtime symbols');

  // Generate proxy exports (all runtime symbols from window.HoldemPB)
  const proxyLines = sortedNames.map(name =>
    `  exports.${name} = pb.${name};`
  );

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
    '  var pb = (typeof window !== \'undefined\' ? window : global).HoldemPB;',
    '',
    ...proxyLines,
    '',
    '  return exports;',
    '}));',
    ''
  ].join('\n');

  fs.writeFileSync(path.join(DIST_DIR, 'proxy.js'), proxy);
  console.log('[build]   dist/proxy.js done');
}

// ---------------------------------------------------------------------------
// Step 3: Build dist/index.d.ts (self-contained type declarations)
// ---------------------------------------------------------------------------
function buildDts() {
  console.log('[build] Building dist/index.d.ts ...');

  const dtsFiles = fs.readdirSync(PB_DIR)
    .filter(f => f.endsWith('.d.ts'))
    .sort();

  const allParts = [];
  let jspbImportAdded = false;

  for (const file of dtsFiles) {
    let content = fs.readFileSync(path.join(PB_DIR, file), 'utf8');

    // Extract internal import aliases so we can strip the prefix from type refs
    const importAliases = [];
    const importRe = /^import\s+\*\s+as\s+(\w+)\s+from\s+['"]\.\.\/\.\.\/protobuf\/holdem\/(\w+)['"];?\s*$/gm;
    let match;
    while ((match = importRe.exec(content)) !== null) {
      importAliases.push({ alias: match[1], from: match[2] });
    }

    // Remove internal imports (inter-module references)
    content = content.replace(importRe, '');

    // Remove google-protobuf imports (we add one at the top)
    content = content.replace(/^import\s+\*\s+as\s+jspb\s+from\s+['"]google-protobuf['"];?\s*$/gm, () => {
      if (!jspbImportAdded) {
        jspbImportAdded = true;
        return 'import * as jspb from "google-protobuf";';
      }
      return '';
    });

    // Strip package/file comments (noise)
    content = content.replace(/^\/\/\s*package:.*$/gm, '');
    content = content.replace(/^\/\/\s*file:.*$/gm, '');

    // Replace internal type references: alias.ClassName -> ClassName
    for (const { alias } of importAliases) {
      const aliasRef = new RegExp('\\b' + alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\.', 'g');
      content = content.replace(aliasRef, '');
    }

    // Collapse multiple blank lines
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

// ---------------------------------------------------------------------------
// Step 4: Build dist/global.d.ts (Window.HoldemPB augmentation)
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Run all build steps
// ---------------------------------------------------------------------------
async function main() {
  try {
    await buildRuntime();
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
