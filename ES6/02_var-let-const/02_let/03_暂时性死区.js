// 在块级作用域内，`let`声明的变量存在暂时性死区
var bar = 'outer bar'
if (true) {
  bar = 'inner bar'
  // ReferenceError: Cannot access 'bar' before initialization
  let bar
}