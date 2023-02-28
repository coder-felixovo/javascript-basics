/* 原型式继承 */

function prototypalInheritance (parent) {
  // 一个临时的构造函数
  function F () { }
  F.prototype = parent
  return new F()
}

var parent = {
  prop: 'ParentClass',
  list: [1, 2],
  introduce: function () {
    console.log('I\'m parent class')
  }
}
var child1 = prototypalInheritance(parent)
// `ES5`新增了`Object.create()`方法规范了原型式继承
// 上面的代码也可改为
var child2 = Object.create(parent)
child1.list.push(3)
console.log(child2.list[2]) // 3

/*
  原型式继承
  实现了普通对象的继承
  实现：创建一个临时的构造函数，将 父对象 作为 临时构造函数的原型对象，
        并返回临时构造函数的实例对象。
  优点：父类方法和属性可以复用。
  缺点：
    1. 父类的引用属性会被所有子类实例共享。
    2. 子类构建实例时不能向父类传递参数
*/