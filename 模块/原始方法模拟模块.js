/* 原始方法模拟模块 */

// 1. 一个函数是一个模块
function fn1 () { }
function fn2 () { }
// 缺点：容易污染全局变量，无法直接看出模块成员之间的关系



// 2. 一个对象是一个模块
var module = new Object({
  length: 0,
  foo: function () { },
  bar: function () { }
})
// 缺点：暴露所有模块成员，内部状态可能被改写
module.length = -1



// 3. 立即执行函数为一个模块
var module2 = (function () {
  var length = 0
  var foo = function () { }
  var bar = function () { }
  return {
    foo: foo,
    bar: bar
  }
})();
console.log(module2.length) // undefined