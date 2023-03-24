// 完全解构
let fruits = ['apple', 'banana', 'cherry', 'durian']
let [a, b, c, d] = fruits
console.log(a, b, c, d)
// "apple" "banana" "cherry" "durian"

// 不完全解构
let [x, y] = [1, 2, 3]
console.log(x, y)
// 1 2

let [, , third] = ['foo', 'bar', 'baz']
console.log(third)
// "baz"

// 解构不成功，则变量值为undefined
let [foo] = []
console.log(foo)
// undefined

let [head, ...tail] = [1, 2, 3, 4]
console.log(head, tail)
// 1 [2, 3, 4]

let [A, B, ...C] = ['a']
console.log(A, B, C)
// "a" undefined []
