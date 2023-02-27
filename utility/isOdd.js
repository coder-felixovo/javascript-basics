/**
 * 判断是否为奇数
 * @param {number} numeral 
 */
function isOdd (numeral) {
  if (typeof numeral !== 'number') {
    throw TypeError(`${numeral} is not a number, its type is ${typeof numeral}.`)
  }
  if (Number.isNaN(numeral)) {
    throw RangeError(`${numeral} is out of range.`)
  }
  if (typeof ('' + numeral).includes('.')) {
    throw RangeError(`${numeral} is decimal`)
  }
  return numeral % 2 === 1 || numeral % 2 === -1
}

