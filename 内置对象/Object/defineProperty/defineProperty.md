# **Object.defineProperty()**

静态方法

# **作用**

`Object.defineProperty()` 在一个对象上定义一个新的属性，或者修改该对象上已经存在的属性，然后返回该对象。

示例：

```javascript
// e.g.1
const obj = {
  name: '漩涡鸣人',
}

// 修改已存在的属性
const res = Object.defineProperty(obj, 'name', {
  value: '漩涡鸣人-update',
})

// 定义一个新的属性
const res2 = Object.defineProperty(obj, 'level', {
  value: '第七代火影',
})

// 指向同一个地址
console.log(obj === res) // true
console.log(obj === res2) // true

console.log(obj.name + '-' + obj.level)
// "漩涡鸣人-update-第七代火影"
```



已知，通过赋值为对象添加的属性，能够出现在属性枚举中。可以通过赋值修改属性的值，也可以删除属性。

示例：

```javascript
// e.g.2
const obj2 = {
  name: '旗木卡卡西',
}
obj2.level = '第六代火影'

// 通过赋值为对象添加的属性，能够出现在属性枚举中
for (prop in obj2) {
  console.log(`obj2: ${prop}`)
  // "obj2: name"
  // "obj2: level"
}

// 可以通过赋值修改属性的值，也可以删除属性
obj2.name = '旗木卡卡西-update'
delete obj2.level
const res3 = Object.keys(obj2)

console.log(res3) // ['name']
console.log(obj2.name) // "旗木卡卡西-update"
```



Object.defineProperty() 能够改变上面的实现细节，在一个对象上提供 **精确** 的属性添加和修改。

默认情况下，通过 Object.defineProperty() 添加的属性，是 `not writable` ， `not enumerable`  和 `not configurable` 的，即

```javascript
configurable: false
enumerable: false
writable: false
```

另外，Object.defineProperty() 使用内部方法 [[DefineOwnProperty]] 代替 [[Set]]，所以它不会调用setters。

# **语法**

`Object.defineProperty(obj, prop, descriptor)` 

# 描述符

Object.defineProperty() 的第三个参数 descriptor 描述符，它有两种形式，二者只能选其一。

* `data descriptor` 
* `accessor descriptor` 

## 共享属性

二者都是对象，它们共享以下属性：

注意：这里提到的默认值是使用 Object.defineProperty() 添加属性的情况下。

### configurable

当值为 `false` 时

* 该属性不能够更改descriptor
* 该属性不能够被删除
* descriptor中的属性也不能更改（如果是data descriptor，则writable: true可以改为false）

默认值：`false`

示例：

```javascript
// e.g.6
const obj6 = {}
Object.defineProperty(obj6, 'name', {
  value: '照美冥',
  writable: true,
  configurable: false,
})

console.log('aaa', obj6.name) // "照美冥"
obj6.name = '照美冥-update'
console.log('bbb', obj6.name) // "照美冥-update"

// 虽然configurable为false，但是writable为true，仍可以修改value
Object.defineProperty(obj6, 'name', {
  value: '照美冥-update-2',
})
console.log('ccc', obj6.name) // "照美冥-update-2"

// 报错
// TypeError: Cannot redefine property: name
Object.defineProperty(obj6, 'name', {
  configurable: true,
})
// 替换为enumerable: true、set()、get()都会报错

delete obj6.name
console.log('ddd', obj6.name) // "照美冥-update-2"
// 在严格模式下会报错
// TypeError: Cannot delete property 'name' of #<Object>
;(() => {
  'use strict'
  delete obj6.name
})()

// 可以将writable由true改为false
Object.defineProperty(obj6, 'name', {
  writable: false,
})
// 此时再改变value就会报错
// // TypeError: Cannot redefine property: name
Object.defineProperty(obj6, 'name', {
  value: '照美冥-update-3',
})
```



```javascript
// e.g.7
const obj7 = {}
Object.defineProperty(obj7, 'name', {
  value: '日向雏田',
  writable: false,
  configurable: true,
})
Object.defineProperty(obj7, 'name', {
  value: '日向雏田-update',
})
console.log(obj7.name) // "日向雏田-update"
obj7.name = '日向雏田-update-2' // writable为false，不起作用
console.log(obj7.name) // "日向雏田-update"

// 严格模式下报错
// TypeError: Cannot assign to read only property 'name' of object
;(() => {
  'use strict'
  obj7.name = '日向雏田-update-2'
})()
```



```javascript
// e.g.8
const obj8 = {}
Object.defineProperty(obj8, 'name', {
  value: '自来也',
  writable: false,
  configurable: false,
})

obj8.name = '自来也-update' // writable为false，不起作用
console.log(obj8.name) // "自来也"

// 报错
// TypeError: Cannot redefine property: name
Object.defineProperty(obj8, 'name', {
  value: '自来也-update-2',
})

// 报错
// TypeError: Cannot assign to read only property 'name' of object
;(() => {
  'use strict'
  obj8.name = '自来也-update-3'
})()
```



能否改变对象上的属性值：

| writable | configurable | 能否改变属性值                             |
| -------- | ------------ | ------------------------------------------ |
| false    | false        | 无法改变属性值                             |
| true     | false        | defineProperty和赋值操作符都可以改变属性值 |
| false    | true         | defineProperty可以，赋值操作符不可以       |



### enumerable

当且仅当为 `true` 时该属性能够出现在属性枚举中。

默认值：`false`

可枚举属性，`Object.assign()` 和展开操作符会考虑该属性，对于非 `Symbol` 属性，还能够出现在 `for...in` 和 `Object.keys()`  中。

示例：

```javascript
// e.g.5
const obj5 = {}
Object.defineProperty(obj5, 'a', {
  value: 97,
  enumerable: true,
})
Object.defineProperty(obj5, 'b', {
  value: 98,
  enumerable: false,
})
Object.defineProperty(obj5, 'c', {
  value: 99,
}) // enumerable默认false
obj5.d = 100
Object.defineProperty(obj5, Symbol.for('e'), {
  value: 101,
  enumerable: true,
})
Object.defineProperty(obj5, Symbol.for('f'), {
  value: 102,
  enumerable: false,
})
for (const prop in obj5) {
  console.log(`obj5: ${prop}`)
  // "obj5: a"
  // "obj5: d"
}
console.log(Object.keys(obj5)) // ['a', 'd']
console.log(obj5.propertyIsEnumerable('a')) // true
console.log(obj5.propertyIsEnumerable('b')) // false
console.log(obj5.propertyIsEnumerable('c')) // false
console.log(obj5.propertyIsEnumerable('d')) // true
console.log(obj5.propertyIsEnumerable(Symbol.for('e'))) // true
console.log(obj5.propertyIsEnumerable(Symbol.for('f'))) // false
const p = { ...obj5 }
console.log(p.a) // 97
console.log(p.b) // undefined
console.log(p.c) // undefined
console.log(p.d) // 100
console.log(p[Symbol.for('e')]) // 101
console.log(p[Symbol.for('f')]) // undefined
```

## data descriptor

data descriptor还能有以下属性：

### value

属性值，可以是任何有效的JavaScript值。

默认值：`undefined`

### writable

为true时属性值可以通过赋值操作符更改。

默认值：`false`

示例：

```javascript
// e.g.4
const obj4 = {}
Object.defineProperty(obj4, 'name', {
  value: '春野樱',
  writable: false,
})
console.log(obj4.name) // "春野樱"
obj4.name = '春野樱-update' // 不报错，但是不起作用
console.log(obj4.name) // "春野樱"

// 严格模式，报错
// TypeError: Cannot assign to read only property 'name' of object
;(() => {
  'use strict'
  obj4.name = '春野樱-update'
})()
```



## accessor descriptor

### get

作为属性的getter函数，如果没有getter则为undefined。当访问属性时，调用此函数不带参数，并将此set设置为访问属性的对象

返回值作为属性值，默认值 `undefined` 

### set

作为属性setter的函数，如果没有setter则为undefined。当属性被赋值时，使用一个参数(赋给属性的值)调用此函数，并将此set设置为赋值属性的对象。默认`undefined` 。



# **异常**

* 如果descriptor没有value、writable、get和set，则将其视为data descriptor。
* 如果descriptor同时具有value或writable和get或set，抛出异常

示例：

```javascript
// e.g.3
const obj3 = {
  name: '宇智波佐助',
}

// 报错
// TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute
Object.defineProperty(obj3, 'level', {
  value: '六道级',
  get: function () {
    return '六道级'
  },
})
```



# 补充

使用属性访问器来赋值与使用 `Object.defineProperty()` ，descriptor会有区别。

```javascript
// e.g.9
const obj9 = {}
obj9.name = '小南'
// 等价于
Object.defineProperty(obj9, 'name', {
  value: '小南',
  writable: true,
  configurable: true,
  enumerable: true,
})

const obj10 = {}
Object.defineProperty(obj10, 'name', { value: '纲手' })
// 等价于
Object.defineProperty(obj9, 'name', {
  value: '纲手',
  writable: false,
  configurable: false,
  enumerable: false,
})
```



