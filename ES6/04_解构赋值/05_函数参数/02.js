// 函数move的参数是一个对象，通过这个对象进行解构
// 得到变量x和y的值，如果解构失败，x和y等于默认值
function move ({ x = 0, y = 0 } = {}) {
  return [x, y]
}
move({ x: 3, y: 8 }) // [3, 8]
move({ x: 3 }) // [3, 0]
move({}) // [0, 0]
move() // [0, 0]