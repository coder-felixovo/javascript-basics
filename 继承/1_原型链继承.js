/* 原型链继承 */

function Parent () {
  this.parent = 'SuperClass'
  this.list = [1];
}

Parent.prototype.speak = function () { console.log('说') }
Parent.prototype.obj = { a: 0 }

function Child () {
  this.child = 'SubClass'
}

Child.prototype = new Parent() // 父类实例作为子类的原型对象
Child.prototype.constructor = Child

const child1 = new Child()
const child2 = new Child()

child1.child = 'SubClass-update' // 只是修改自身的`child`属性，不影响`child2`实例
child1.parent = 'SuperClass-update' // 并未访问原型上的属性，只是在自身上添加属性
// 如果是 child1.obj = {}，child2仍会输出{ a: 0 }
child1.list.push(2)
child1.obj.a = 97

console.log(child1) // Child { child: 'SubClass-update', parent: 'SuperClass-update' }
child2.speak()
console.log(child2.child) // "SubClass"
console.log(child2.parent) // "SuperClass"
console.log(child2.list) // [ 1, 2 ]
console.log(child2.obj) // { a: 97 }



/* 
  原型链继承
  实现：父类实例作为子类的原型对象
  优点：能够共用父类的属性和方法
  缺点：
    1. 子类构建实例时不能向父类传递参数，因为new子类时父类实例已经创建了。
    2. 父类的引用属性会被所有子类实例共享
*/


