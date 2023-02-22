1. 导入require 导出 exports/module.exports 是 CommonJS 的标准，通常适用范围如 Node.js
2. import/export 是 ES6 的标准，通常适用范围如 React
3. require 是赋值过程并且是运行时才执行，也就是同步加载
4. require 可以理解为一个全局方法，因为它是一个方法所以意味着可以在任何地方执行。
5. import 是解构过程并且是编译时执行，理解为异步加载
6. import 会提升到整个模块的头部，具有置顶性，但是建议写在文件的顶部。

- `commonjs 输出的，是一个值的拷贝，而es6输出的是值的引用；commonjs 是运行时加载，es6是编译时输出接口；`


1. require是符合commonjs规范，适用于服务器环境，import符合es6 module规范，AMD是适用于浏览器环境。
2. commonjs和amd都是运行时确定依赖关系，module是编译时确定依赖关系
3. 
1. require是内部会创建export去接受js需要返回的变量