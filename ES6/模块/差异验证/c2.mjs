import { obj, number } from './c1.mjs'

// 可以对obj添加新的属性
obj.prop = 123

// 但是重新赋值就会报错
obj = {}
number = 2
// 可以理解为创建了一个·const`变量
// TypeError: Assignment to constant variable.