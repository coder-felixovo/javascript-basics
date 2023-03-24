// 如果`=`右边是数值，则先转为对象，数值的包装对象上有toString属性
let { toString: s1 } = 123
console.log(s1 === Number.prototype.toString) // // true

// 如果`=`右边是布尔值，则先转为对象，布尔值的包装对象上有toString属性
let { toString: s2 } = true
console.log(s2 === Boolean.prototype.toString) // // true


// undefined 和 null 无法解构赋值，报错
let { prop: x } = undefined
// TypeError: Cannot destructure property 'prop' of 'undefined' as it is undefined.
let { prop: y } = null
// TypeError: Cannot destructure property 'prop' of 'null' as it is null.