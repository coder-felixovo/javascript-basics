/**
 * 判断是否为数组
 * @param {*} arg 
 */
function isArray (arg) {
  if (Array.isArray && typeof Array.isArray === 'function') {
    return Array.isArray(arg)
  }
  if (arg.constructor) {
    return arg.constructor === Array
  }
  if (typeof arg === 'object') {
    return arg instanceof Array
  }
  return Object.prototype.toString.call(arg) === '[object Array]'
}