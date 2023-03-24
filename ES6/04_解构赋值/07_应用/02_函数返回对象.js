// 函数返回一个对象
function backObj () {
  return {
    foo: 1,
    bar: 2,
    baz: 3,
  }
}
let { foo, bar, baz } = backObj()
console.log(foo, bar, baz) // 1 2 3