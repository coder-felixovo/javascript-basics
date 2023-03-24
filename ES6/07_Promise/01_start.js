const flag = true

const promise = new Promise((resolve, reject) => {
  flag ? resolve('Success') : reject('failure')
})

console.log(promise) // Promise { 'Success' }

promise.then((res) => {
  console.log(res) // "success"
}).catch((err) => {
  console.log(err)
})