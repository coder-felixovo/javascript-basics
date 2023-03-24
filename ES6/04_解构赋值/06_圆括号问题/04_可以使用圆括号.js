// 可以使用圆括号的情况：赋值语句的非模式部分
[(x)] = [3];
console.log(x); // 3

({ p: (d) } = { p: 1 });
console.log(d); // 1

