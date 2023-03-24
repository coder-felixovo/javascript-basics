// 以下示例都会报错
let [(a)] =[1];
let { x: (c)} = { };
let({ x: c }) = {};
let {(x: c)} = { };
let {(x): c} = { };
let { o: ({ p: p }) } = { o: { p: 2 } };