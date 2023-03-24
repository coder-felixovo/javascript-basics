// 如果 = 右边不是数组，严格来说，不是可遍历结构，报错
// 以下都会报错
let [a] = 1
let [b] = true
let [c] = NaN
let [d] = undefined
let [e] = null
let [f] = {}

// Set结构可以解构赋值
let [foo] = new Set(['apple', 'banana', 'cherry'])
console.log(foo) // "apple"

