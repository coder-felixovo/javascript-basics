// 注意与02.js的区别
// 这里是为函数move的参数指定默认值，而不是为变量x和y指定默认值
function move ({ x, y } = { x: 0, y: 0 }) {
  return [x, y]
}
move({ x: 3, y: 8 }) // [3, 8]
move({ x: 3 }) // [3, undefined]
move({}) // [undefined, undefined]
move() // [0, 0]