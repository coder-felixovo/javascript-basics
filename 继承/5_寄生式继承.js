/* 寄生式继承 */

function clone (obj) {
  var clone = Object.create(obj)
  clone.speak = function () {
    console.log('说')
  }
  return clone
}

// 这里如果直接写parent，指向Window
var parent = {
  name: 'parent',
  nums: [1],
}
var child1 = clone(parent)
var child2 = clone(parent)
child1.nums.push(2)
console.log(child2.nums) // [ 1, 2 ]
child2.speak() // "说"


/* 
  寄生式继承
  在原型式继承的基础上，为对象添加方法
  缺点：
    1. 多个实例的引用属性共享
    2. 使用寄生式继承来为对象添加方法，由于不能做到复用而降低效率（每一个函数都是新的）
*/