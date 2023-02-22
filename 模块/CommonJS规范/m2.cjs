// 引入整个模块
const m1 = require('./m1.cjs')
console.log(m1)

// 引入模块中某些成员
const { naruto } = require('./m1.cjs')
console.log(naruto)
