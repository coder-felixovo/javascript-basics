/**
 * Returns a Boolean value that indicates whether a value is leap year.
 * @param {number} val 
 */
function isLeapYear (val) {
  if (val === null) return false
  return (val % 4 === 0 && val % 100 !== 0) || val % 400 === 0
}

module.exports.isLeapYear = isLeapYear