var arr = [
  1, 1, 10, 10, 0, 0, +0, -0, 'a', 'a', 'coffee', 'coffee',
  'true', 'true', true, true,
  'false', 'false', false, false,
  'undefined', 'undefined', undefined, undefined,
  'null', 'null', null, null,
  'NaN', 'NaN', NaN, NaN,
  '{}', '{}', {}, {},
  // Symbol('a'), Symbol('a'), Symbol.for('b'), Symbol.for('b')
]
console.log('arr.length', arr.length) // 36

function uniqueArrayItem (arr) {
  var array = arr
  var len = array.length
  array.sort(function (a, b) {
    return a - b
  })
  function loop (index) {
    if (index >= 1) {
      if (array[index] === array[index - 1]) {
        array.splice(index, 1)
      }
      loop(index - 1)
    }
  }
  loop(len - 1)
  return array
}
const result = uniqueArrayItem(arr)
console.log('result.length', result.length) // 19
console.log(result)
// 无法去除NaN和{}