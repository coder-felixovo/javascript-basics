// 对象中属性的次序对取值没有影响，变量必须与属性同名，才能取到正确的值，
// 如果不存在该属性，则为undefined
{
  let { apple, banana, cherry } = { banana: '香蕉', apple: '苹果' }
  console.log(apple, banana, cherry)
  // "苹果" "香蕉" undefined
}

// 解构对象现有方法
{
  let { log } = console
  log('console.log')
  // "console.log"
}

// 取别名
{
  let { foo: a } = { foo: 'bar' }
  console.log(a)
  // "bar"
  // foo // ReferenceError: foo is not defined
}
// 上面代码中，foo是匹配模式，a才是真正被赋值的变量
// 也就是说，对象的解构赋值内部机制为，先找到同名属性，然后再赋值给对应的变量。

// 嵌套结构的对象
// 如果子对象所在的父属性不存在，则会报错
{
  let obj = {
    a: {
      capital: 'A',
    },
  }
  let {
    a,
    a: { capital },
  } = obj
  console.log(a) // { capital: 'A' }
  console.log(capital) // "A"
}

// 解构赋值能取到原型上的属性
{
  const obj1 = {}
  const obj2 = { foo: 'bar' }
  Object.setPrototypeOf(obj1, obj2) // obj1的原型对象是obj2
  const { foo } = obj1
  console.log(foo) // "bar"
}

// 对象解构赋值默认值的生效条件：对象属性值严格等于undefined
{
  let { x = 1, y = 2, z = 3 } = { y: null, z: undefined }
  console.log(x, y, z) // 1 null 3
}