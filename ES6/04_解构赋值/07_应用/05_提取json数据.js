// 提取后端返回的json数据
let jsonData = {
  status: 200,
  msg: '获取用户列表成功',
  data: [
    { id: 1, name: '张三' }
  ]
}
const { data } = jsonData
console.log(data)
// [ { id: 1, name: '张三' } ]