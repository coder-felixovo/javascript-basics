/* 
  使用Array.prototype.sort() 进行排序，
  对排序后的结果进行遍历和相邻元素比较
*/
var arr = [
  1, 1, 10, 10, 0, 0, +0, -0, 'a', 'a', 'coffee', 'coffee',
  'true', 'true', true, true,
  'false', 'false', false, false,
  'undefined', 'undefined', undefined, undefined,
  'null', 'null', null, null,
  'NaN', 'NaN', NaN, NaN,
  '{}', '{}', {}, {}
  // Symbol('a'), Symbol('a'), Symbol.for('b'), Symbol.for('b')
]
console.log('arr.length', arr.length) // 36
function uniqueArrayItem (arr) {
  if (!Array.isArray(arr)) {
    return
  }
  arr = arr.sort()
  var newArr = [arr[0]]
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
const result = uniqueArrayItem(arr)
console.log('result.length', result.length) // 19
console.log(result)
// 不能去除NaN和{}