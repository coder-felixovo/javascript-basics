var arr = [
  1, 1, 10, 10, 0, 0, +0, -0, 'a', 'a', 'coffee', 'coffee',
  'true', 'true', true, true,
  'false', 'false', false, false,
  'undefined', 'undefined', undefined, undefined,
  'null', 'null', null, null,
  'NaN', 'NaN', NaN, NaN,
  '{}', '{}', {}, {},
  Symbol('a'), Symbol('a'), Symbol.for('b'), Symbol.for('b')
]

console.log('original length ', arr.length) // 40

function removeDuplicateArrayElement (arr) {
  if (!Array.isArray(arr)) {
    throw TypeError(`The param ${arr} is not an array`)
  }
  const newArr = []
  const obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      newArr.push(arr[i])
      obj[arr[i]] = 1
    } else {
      obj[arr[i]]++
    }
  }
  return newArr
}

const result = removeDuplicateArrayElement(arr)
console.log('after length', result.length) // 15
console.log(result)
// true和false移除了，能够去重 `NaN` 和 `{}`，不能去重 `Symbol()`