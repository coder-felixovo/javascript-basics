function flattenArray (arr) {
  if (!Array.isArray(arr)) {
    throw TypeError(`The param ${arr} is not an array`)
  }
  let str = JSON.stringify(arr).replace(/(\[|\])/g, '')
  str = '[' + str + ']'
  arr = JSON.parse(str)
  return arr
}

const arr = [1, [2, [3, [4, [5], 6], 7], 8], 9]
const result = flattenArray(arr)
console.log(result)

