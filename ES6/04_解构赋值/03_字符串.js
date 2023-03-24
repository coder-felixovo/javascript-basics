// 字符串也可以解构赋值，此时字符串被转换成了类数组对象
const [a, b, c, d, e] = 'hello'
console.log(a, b, c, d, e)
// "h" "e" "l" "l" "o"

// 类数组对象还有一个length属性
const { length } = 'world'
console.log(length) // 5
