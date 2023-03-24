// `const`声明的变量存在块级作用域，只在它所在的代码块能够访问。
{
  const e = 2.71828
}
console.log(e)
// ReferenceError: e is not defined