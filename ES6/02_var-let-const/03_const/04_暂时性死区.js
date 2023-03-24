// `const`声明的变量也存在暂时性死区，只能在声明变量之后使用
{
  console.log(foo)
  const foo = 'bar'
  // ReferenceError: Cannot access 'foo' before initialization
}