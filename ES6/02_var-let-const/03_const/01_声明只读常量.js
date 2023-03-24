/* 
  `const`声明一个只读常量，一旦声明，常量的值就不能改变。
  上述中的“值”，实际上保障的变量所指向的内存地址不能改变。
  基本数据类型：值保存变量指向的内存地址
  对象类型：值保存指向堆中数据的指针
*/
const PI = 3.1415926
PI = 3.14
// TypeError: Assignment to constant variable.

const obj = {}
obj.num = 1 // 允许
obj = [] // 尝试改变引用地址
// TypeError: Assignment to constant variable.