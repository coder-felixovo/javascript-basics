/* 构造函数继承 */

function Parent (name) {
  this.name = name
  this.list = [1]
}

Parent.prototype.year = 2023
Parent.prototype.speak = function () { console.log('speak') }

function Child (name) {
  Parent.call(this, name)
}

const child1 = new Child('child1')
child1.list.push(2)
const child2 = new Child('child2')
child1.year = '2023-update'
console.log(child1) // Child { name: 'child1', list: [ 1, 2 ], year: '2023-update' }
console.log(child2) // Child { name: 'child2', list: [ 1 ] }
console.log(child2.year) // undefined
console.log(child2.speak()) // child2.speak is not a function

/*
  构造函数继承
  实现：子类内部调用父类构造函数，传入this和其它参数。
  优点：
    1. 父类的引用属性不会被共享。
    2. 子类构建实例时可以向父类传递参数。
  缺点：
    1. 不能访问原型的属性和方法，因为当前子构造函数的原型对象并不指向父构造函数。
*/