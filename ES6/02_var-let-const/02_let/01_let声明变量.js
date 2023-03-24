// `let`声明的变量具有块级作用域，在声明的代码块内有效
{
  var a = 1;
  let b = 2;
  {
    console.log(b) // 2
  }
}
console.log(a) // 1
console.log(b) // ReferenceError: b is not defined