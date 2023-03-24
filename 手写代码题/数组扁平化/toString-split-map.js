function flattenArray (arr) {
  if (!Array.isArray(arr)) {
    throw TypeError(`The param ${arr} is not an array`)
  }
  return arr.toString().split(',').map((item) => { return parseFloat(item) })
}

const arr = [0, [1, [2, [3, 4, 5, 6], 7], 8], 9]
const result = flattenArray(arr)
console.log(result)
