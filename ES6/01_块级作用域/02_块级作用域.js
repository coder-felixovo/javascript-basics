// 在ES6中，`let`或`const`声明的变量具有块级作用域。
function foo () {
  let num = 0
  const PI = 3.1415926
  if (true) {
    let num = 0
    const PI = 3.14
    const e = 2.71
  }
  console.log(num, PI)
  // console.log(E)
}
foo()
// output: 0 3.1415926
// ReferenceError: E is not defined

// 块级作用域嵌套
{
  let say = 'hello world'
  {
    let say = 'hello javascript'
    console.log(say)
  }
  console.log(say)
}
// output:
// hello javascript
// hello world