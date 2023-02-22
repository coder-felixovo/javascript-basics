// `export`通过接口输出的是同一个值，不同的脚本加载这个接口，得到的是同样的实例
function Foo () {
  this.number = 0
  this.add = function () {
    this.number += 1
  }
  this.show = function () {
    console.log(this.number)
  }
}

export let foo = new Foo()