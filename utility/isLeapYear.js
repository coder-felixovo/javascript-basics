/**
 * 判断是否为闰年
 * @param {number} year 
 * @returns Boolean
 */
function isLeapYear (year) {
  if (typeof year !== 'number') {
    throw TypeError(`${year} is not a number`)
  }
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
