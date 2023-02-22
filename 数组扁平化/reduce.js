function flattenArray (arr, depth = 1) {
  if (!Array.isArray(arr)) {
    throw TypeError(`The param ${arr} is not an array`)
  }
  if (depth <= 0) return arr
  return arr.reduce(
    (res, curr) => res.concat(Array.isArray(curr) ? flattenArray(curr, depth - 1) : curr),
    []
  )
}
const arr = [1, [2, [3, [4, [5], 6], 7], 8], 9]
const result = flattenArray(arr, Infinity)
console.log(result)