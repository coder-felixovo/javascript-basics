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
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1)
        j--
      }
    }
  }
  return arr
}

const result = uniqueArrayItem(arr)
console.log('after length', result.length) // 19
console.log(result)
// 移除了true false，没有去重 `{}`、 `NaN` 和 `Symbol()`