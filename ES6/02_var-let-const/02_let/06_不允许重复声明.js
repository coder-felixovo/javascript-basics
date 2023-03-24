// `let`不允许在相同作用域内，重复声明同一个变量
{
  let name = '张三'
  let name = '李四'
  // SyntaxError: Identifier 'name' has already been declared
}

{
  function fn (arg) {
    let arg
    // SyntaxError: Identifier 'arg' has already been declared
  }
}
