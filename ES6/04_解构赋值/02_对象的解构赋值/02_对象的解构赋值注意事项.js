// 将一个已声明的变量用于解构赋值，需要注意，如下写法是错误的
{
  let x
  // {x} = {x:1}
  // SyntaxError
}
// 上面代码写法会报错

// 正确写法
{
  let x;
  ({ x } = { x: 1 })
  console.log(x) // 1
}

// 解构赋值允许等号左边的模式中不放置任何变量名，虽然没有意义，但语法上是合法的，可以执行
{
  ; ({} = [true, false])
    ; ({} = 'abc')
    ; ({} = [])
}

// 数组本质也是对象，可以对数组进行对象属性的解构
{
  let arr = [1, 2, 3]
  let { 0: first, [arr.length - 1]: last } = arr
  console.log(first, last)
  // 1 3
}