# 使用
1. 从lodash-es引入（推荐）
```js
import { debounce, throttle, padStart } from 'lodash-es';
```
比起lodash，lodash-es使用了ES module组织模块，构建工具构建时在做体积优化(tree shaking)的时候，通过对模块的依赖分析，能将lodash包中未使用到的模块都移除掉。

此种方法不需要像更改引入入口一样改变使用习惯，保留了ES module按名称引入的写法。

如果是一个新的项目，或没有使用babel编译源代码（用了swc, esbuild, tsc等等），那么lodash-es便是最佳选择。
# api
1. join
```js
function join(arr, separator="") {
  return arr === null ? "" : Array.prototype.join.call(arr, separator)
}
```# mini-compiler
# mini-compiler
