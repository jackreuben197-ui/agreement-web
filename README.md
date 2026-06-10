# @silenthill/agreement-web

共享 protobuf 运行时协议包。支持 Vue3 + Cocos 2.4，提供 proxy（薄代理）和 runtime（全量打包）两种入口。

## 安装

```bash
npm install @silenthill/agreement-web
```

## 使用方式

### 方式一：CDN 分离（推荐，proxy ~22KB，class 懒加载）

runtime 部署在 CDN 通过 `<script>` 加载，业务代码只引入 proxy。

```html
<!-- 页面顶部加载 runtime -->
<script src="/libs/holdem-pb.js"></script>
```

```ts
// ESM — 从 proxy 导入（class 懒加载，enum 内联立即可用）
import { ClientMessageEnterRoom, Code } from '@silenthill/agreement-web'

Code.MSG_D_CB_ENTER_ROOM              // → 2001（内联，立即可用）
const req = new ClientMessageEnterRoom() // 运行时解析 window.HoldemPB
```

```js
// CommonJS — Cocos 2.4
const { ClientMessageEnterRoom, Code } = require('@silenthill/agreement-web')
```

### 方式二：直接打包（runtime 随项目打包，~2MB）

不需要 CDN 部署，全部 protobuf 类直接可用。

```ts
// ESM
import { ClientMessageEnterRoom, Code } from '@silenthill/agreement-web/runtime'

Code.MSG_D_CB_ENTER_ROOM              // → 2001
const req = new ClientMessageEnterRoom() // 直接可用
```

```js
// CommonJS — Cocos 2.4
const { ClientMessageEnterRoom, Code } = require('@silenthill/agreement-web/runtime')
```

### 模式对比

| | proxy（方式一） | runtime（方式二） |
|---|---|---|
| 文件大小 | ~22 KB | ~2 MB |
| 需要 CDN | 是，`holdem-pb.js` | 否 |
| class 加载 | 懒加载（`new` 时才解析） | 直接可用 |
| enum 加载 | 内联，`import` 时可用 | 直接可用 |
| 适用场景 | 多页面共享 runtime | 独立应用 / 快速启动 |

## 开发

```bash
# 从 GitLab 同步 holdem/pb/ 后构建
npm run build

# 构建流程：esbuild 打包 274 pb 模块 → dist/holdem-pb.js + dist/runtime.js
#         提取 527 运行时符号 → dist/proxy.js + dist/index.d.ts
```
