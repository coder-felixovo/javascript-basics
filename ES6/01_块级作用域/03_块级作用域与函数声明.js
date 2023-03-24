// 允许在块级作用域内声明函数
// 函数声明类似于var，即提升到全局作用域或函数作用域头部
// 函数声明还会提升到所在的块级作用域头部
console.log(foo) // "undefined"
{
  foo() // "foo"
  function foo () {
    console.log('foo')
  }
}

// 不建议在块级作用域内声明函数，如果确实需要，请写成函数表达式
console.log(bar) // undefined
{
  console.log(bar) // undefined
  var bar = function () {
    console.log('bar')
  }
  bar() // bar
}