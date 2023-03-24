function* flattenArray (arr) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      yield* flattenArray(item)
    } else {
      yield item
    }
  }
}
let arr = [1, [2, [3, [4, [5], 6], 7], 8], 9]
const result = [...flattenArray(arr)]
console.log(result)