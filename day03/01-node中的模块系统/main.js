// 默认得到的是对象
// 使用对象中的成员必须  . 点某个成员来访问
// 有时候，对于一个模块,仅仅就想导出一个方法
var fooExports = require('./foo')

// ReferenceError:foo is not defined
// console.log(foo)

console.log(fooExports)