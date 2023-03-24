/**
 * Returns a Boolean value that indicates whether a value is an array.
 * @param {Array} val 
 */
function isArray (val) {
  return Object.prototype.toString.call(val) === '[object Array]'
}

module.exports.isArray = isArray