function realizeNew (fn, ...args) {
  // 1. 创建一个新的空的对象
  // var obj = {}
  var obj = Object.create(null)

  // 2. 将新对象的原型属性`proto`设置为构造函数的`prototype`
  // obj.__proto__ = fn.prototype
  Object.setPrototypeOf(obj, fn.prototype)

  // 3. 将新对象作为`this`绑定到构造函数中，并执行构造函数
  var result = fn.apply(obj, args)

  // 4. 若返回值为对象，直接返回该对象，否则返回obj
  return result instanceof Object ? result : obj
}



// Demo
function Foo (name) {
  this.name = name
}
Foo.prototype.getName = function () {
  return this.name
}
var obj = realizeNew(Foo, '旗木卡卡西')
console.log(obj) // Foo { name: '旗木卡卡西' }
console.log(obj.getName()) 