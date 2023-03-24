function flattenArray (arr = [], depth = 1) {
  let result = []
    ; (function flat (arr, depth) {
      arr.forEach((item) => {
        if (Array.isArray(item) && depth > 0) {
          flat(item, depth - 1)
        } else {
          result.push(item)
        }
      })
    })(arr, depth)
  return result
}
let arr = [1, [2, [3, [4, [5], 6], 7], 8], 9]
const result = flattenArray(arr, 4)
console.log(result)