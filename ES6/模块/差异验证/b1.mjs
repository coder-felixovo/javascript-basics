/* 
  ES6模块输出的是`值引用`
  JavaScript引擎对脚本静态分析时，遇到`import`，生成一个只读引用，
  等到脚本执行时，根据这个引用，到对应的模块取值，
  因此模块内的值变了，加载的值也会跟着变，
  因此ES6模块是`动态地引用`不会缓存值
*/
export var counter = 1
export function increaseCounter () {
  counter++
}
