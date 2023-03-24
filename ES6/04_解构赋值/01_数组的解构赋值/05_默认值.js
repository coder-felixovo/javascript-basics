// 当一个数组成员严格等于（===）undefined时，默认值才会生效
let [x = 1] = []
console.log(x) // 1

let [y = 2] = [undefined]
console.log(y) // 2

let [z = 3] = [null]
console.log(z) // null

// 如果默认值是一个表达式，那么这个表达式是惰性求值，只有在用到的时候才会求值
function func () {
  return 100
}
let [fn1 = func()] = [1]
console.log(fn1) // 1
let [fn2 = func()] = []
console.log(fn2) // 100

// 默认值还可以引用解构赋值的其它变量，但该变量必须已经声明
let [a = 1, b = a] = []
console.log(a, b) // 1 1
let [c = d, d = 1] = [] // 报错
// ReferenceError: Cannot access 'd' before initialization