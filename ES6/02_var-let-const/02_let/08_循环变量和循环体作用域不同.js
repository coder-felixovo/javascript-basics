// 使用`let`声明`for`循环中的循环变量
// 循环变量和循环体内不在同一个作用域
for (let i = 0; i < 3; i++) {
  let i = 'abc'
  console.log(i)
  // 输出3次abc
}