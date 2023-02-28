/* 组合继承 */

function Parent (name) {
  this.name = name
  this.list = [1]
}

Parent.prototype.year = 2023
Parent.prototype.nums = [-1]
Parent.prototype.speak = function () { console.log('speak') }

function Child (name) {
  Parent.call(this, name)
}

Child.prototype = new Parent()

const child1 = new Child('child1')
child1.name = 'child1-update'
child1.year = '2023-update'
child1.list.push(2)
child1.nums.push(-2)
const child2 = new Child('child2')
console.log(child1) // Child { name: 'child1-update', list: [ 1, 2 ], year: '2023-update' }
console.log(child2) // Child { name: 'child2', list: [ 1 ] }
console.log(child2.year) // 2023
child2.speak() // "speak"
console.log(child2.nums) // [ -1, -2 ]

/* 
  组合继承：原型链继承 和 构造函数继承 组合
  优点：
    1. 父类原型对象上的属性和方法共享。
    2. 父类的引用属性不会共享。
    3. 子类构建实例可以向父类传参。
  缺点：
    调用两次父类构造函数
    1. 给Child原型赋值执行了一次Parent()
    2. 在子类中执行了一次Parent()
*/