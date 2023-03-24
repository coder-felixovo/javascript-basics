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
  return Array.from(new Set(arr))
}

const result = uniqueArrayItem(arr)
console.log('after length', result.length) // 21
console.log(result)
// 没有去重 `{}` 和 `Symbol()`