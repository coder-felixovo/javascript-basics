// 实际上，该数据结构具有Iterator接口，都可以采用数组形式的解构赋值。
function* fibs () {
  let a = 0
  let b = 1
  while (true) {
    yield a;
    [a, b] = [b, a + b]
  }
}
let [first, second, third, fourth, fifth, sixth] = fibs()
console.log(sixth) // 5