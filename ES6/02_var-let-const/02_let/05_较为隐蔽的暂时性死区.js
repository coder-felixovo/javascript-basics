// 较为隐蔽的暂时性死区
{
  function foo (x = y, y = 2) {
    return [x, y]
  }
  foo()
  // ReferenceError:  Cannot access 'y' before initialization
}
