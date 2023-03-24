var Counter = (function () {
  var privateCounter = 0
  function change (val) {
    privateCounter += val
  }
  return {
    increment: function () {
      change(1)
    },
    decrement: function () {
      change(-1)
    },
    value: function () {
      return privateCounter
    }
  }
})();

console.log(Counter.value()) // 0
Counter.increment()
Counter.increment()
console.log(Counter.value()) // 2
Counter.decrement()
console.log(Counter.value()) // 1