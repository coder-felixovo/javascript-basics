/**
 * Returns a boolean value that indicates whether a value is odd number.
 * @param {number} val 
 */
function isOdd (val) {
  if (typeof val !== 'number') return false
  if (('' + val).includes('.')) return false
  return val % 2 === 1 || val % 2 === -1
}

module.exports.isOdd = isOdd