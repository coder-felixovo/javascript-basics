// CommonJS 模块输出的是“值拷贝”，也就是说，一旦输出该值，模块内部的变化不会影响到这个值
var counter = 0
var number = 0
var obj = {
  total: 0
}
function increaseCounter () {
  counter++
}
function increaseNumber () {
  number++
}
function increaseObjTotal () {
  obj.total++
}

module.exports = {
  counter,
  increaseCounter,
  increaseNumber,
  // 但是通过函数取值，就能读取`number`的改变
  get number () {
    return number
  },
  obj,
  increaseObjTotal
}