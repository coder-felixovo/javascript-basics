function flattenArray (arr) {
  let stack = [...arr]
  let result = []
  while (stack.length) {
    let next = stack.pop()
    if (Array.isArray(next)) {
      stack.push(...next)
    } else {
      result.push(next)
    }
  }
  return result.reverse()
}
let arr = [1, [2, [3, [4, [5], 6], 7], 8], 9]
const result = flattenArray(arr)
console.log(result)