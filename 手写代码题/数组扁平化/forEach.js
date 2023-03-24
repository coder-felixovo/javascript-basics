const flattenArray = (arr) => {
  const result = []
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item))
    } else {
      result.push(item)
    }
  })
  return result
}
const nestedArr = [0, [1, [2, [3, 4, 5, 6], 7], 8], 9]
console.log(flattenArray(nestedArr))
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]