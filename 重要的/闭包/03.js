function addFactory (x) {
  return function (y) {
    return x + y
  }
}

var add5 = addFactory(5)
var add10 = addFactory(10)

console.log(add5(10)) // 15
console.log(add10(50)) // 60