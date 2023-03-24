// 1. 内层变量可能会覆盖外层变量。
var num = 0
function f () {
  console.log(num)
  if (false) {
    var num = 100
  }
}
f()
// output: undefined

// 2. 用于计数的循环变量成为全局变量
for (var i = 0; i < 10; i++) { }
console.log(i)
// output: 10
