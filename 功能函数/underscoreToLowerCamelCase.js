/**
 * Converts the underscore case to lower camel-case.
 * If the value is not string or it doesn't includes "_", return the value.
 * For example, stu_id returns stuId, stuage returns stuage. 
 * @param { string } val 
 * @returns a camel-case name
 */
function underscoreToLowerCamelCase (val) {
  if (typeof val !== 'string' || !val.includes('_')) return val
  const arr = val.split('_')
  for (let i = 1; i <= arr.length - 1; i++) {
    const firstLetterToUpper = arr[i].charAt(0).toUpperCase()
    const removeFirstLetter = arr[i].slice(1)
    arr[i] = firstLetterToUpper + removeFirstLetter
  }
  return arr.join('')
}

module.exports.underscoreToLowerCamelCase = underscoreToLowerCamelCase

