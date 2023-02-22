function flattenArray (arr) {
  if (!Array.isArray(arr)) {
    throw TypeError(`The param ${arr} is not an array`)
  }
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flattenArray(arr[i]))
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}

const arr = [1, [2, [3, [4, [5], 6], 7], 8], 9]
const result = flattenArray(arr)
console.log(result)