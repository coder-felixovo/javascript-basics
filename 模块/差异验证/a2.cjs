var mod = require('./a1.cjs')

console.log('counter', mod.counter) // 0
mod.increaseCounter() // 内部的变化并未影响加载的值
console.log('after increaseCounter ', mod.counter) // 0

console.log('number ', mod.number) // 0
mod.increaseNumber()
console.log('after increaseNumber ', mod.number) // 1

console.log('obj.total', mod.obj.total) // 0
mod.increaseObjTotal()
console.log('after increaseObjTotal', mod.obj.total) // 1