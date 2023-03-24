function flattenArray (arr, depth = 0) {
  if (!Array.isArray(arr)) {
    throw TypeError(`The param ${arr} is not an array`)
  }
  const result = []
    ; (function flat (arr, depth) {
      for (let item of arr) {
        if (Array.isArray(item) && depth > 0) {
          flat(item, depth - 1)
        } else {
          item !== void 0 && result.push(item)
        }
      }
    })(arr, depth)
  return result
}

const arr = [1, [2, [3, [4, [5], 6], 7], 8], 9]
const result = flattenArray(arr, Infinity)
console.log(result)