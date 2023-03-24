/* 
  Converting camel case to underscore case
  example：stuId => stu_id
 */
function lowerCamelCaseToUnderscore (val) {
  if (typeof val !== 'string') return val
  const capitalLetterIndexArr = [] // The index of a capital letter in given string.
  const sliceArr = [] // fragment in given string.
  const len = val.length
  const firstLetterUnicode = val.charAt(0).charCodeAt(0)
  let firstLetterLower, str
  if (firstLetterUnicode >= 65 && firstLetterUnicode <= 90) {
    firstLetterLower = val.charAt(0).toLowerCase()
    str = firstLetterLower + val.slice(1)
  } else {
    str = val
  }
  for (let i = 1; i < len; i++) {
    const letterUnicode = str.charAt(i).charCodeAt(0)
    if (letterUnicode >= 65 && letterUnicode <= 90) {
      capitalLetterIndexArr.push(i)
    }
  }
  const _len = capitalLetterIndexArr.length
  for (let i = 0; i < _len; i++) {
    if (_len - 1 === i) {
      sliceArr.push(str.slice(capitalLetterIndexArr[i]).toLowerCase())
    } else {
      sliceArr.push(str.slice(capitalLetterIndexArr[i], capitalLetterIndexArr[i + 1]).toLowerCase())
    }
  }
  const result = str.slice(0, capitalLetterIndexArr[0]) + '_' + sliceArr.join('_')
  return result
}

module.exports.lowerCamelCaseToUnderscore = lowerCamelCaseToUnderscore

console.log(lowerCamelCaseToUnderscore("StuId"))