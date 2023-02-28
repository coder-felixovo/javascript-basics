/* 寄生组合式继承 */

function clone (parent, child) {
  child.prototype = Object.create(parent.prototype)
  child.prototype.constructor = child
}

function Parent (name) {
  this.name = name
  this.parent = 'SuperClass'
  this.nums = [1, 2]
}

Parent.prototype.speak = function () {
  console.log('说')
}

function Child (name) {
  this.child = 'SubClass'
  Parent.call(this, name)
}

clone(Parent, Child)

Child.prototype.run = function () {
  console.log('跑')
}


var child1 = new Child('child1')
var child2 = new Child('child2')
child1.nums.push(3)
console.log(child1)
console.log(child2)
child2.speak()
child2.run()
