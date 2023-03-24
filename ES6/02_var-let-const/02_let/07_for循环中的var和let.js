// for循环的计数器就很适合使用let

// var
var arrFor = []
for (var i = 0; i < 10; i++) {
  // `i`是`var`声明的，此时`i`在全局内有效
  arrFor[i] = function () {
    console.log(i) // 这里的`i`指向全局中的`i`
  }
}
arrFor[2]() // output: 10

// let
var arrLet = []
for (let i = 0; i < 10; i++) {
  // `i`是`let`声明的，当前的`i`只在本轮循环有效
  arrLet[i] = function () {
    console.log(i)
  }
}
arrLet[2]() // output: 2

// JS引擎会记住上一轮循环的值，初始化本轮的变量`i`时，在上一轮循环的基础上进行计算。