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

function uniqueArrayItem (arr) {
  if (!Array.isArray(arr)) {
    throw TypeError(`The param ${arr} is not an array`)
  }
  return arr.filter(function (item, index, arr) {
    return arr.indexOf(item, 0) === index
  })
}

const result = uniqueArrayItem(arr)
console.log('after length', result.length) // 20
console.log(result)
// 能够去重 `NaN`，不能去重 `{}` 和 `Symbol()`