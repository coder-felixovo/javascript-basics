const arr = [0, [1, [2, [3, 4, 5, 6], 7], 8], 9]
const result = arr.flat(Infinity) // Infinity表示任意深度的嵌套
console.log(result)
