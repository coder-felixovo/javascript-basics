// "暂时性死区"意味着`typeof`不再是一个百分百安全的操作
{
  typeof a // undefined
  typeof b
  // ReferenceError: Cannot access 'b' before initialization
  let b
}
