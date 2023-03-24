const http = require('http')

const server = http.createServer()

server.on('request', (request, response) => {
  const data = {
    name: '原生Ajax请求'
  }
  response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
  response.setHeader('Content-type', 'application/json')
  response.end(JSON.stringify(data))
})

server.listen(3000, () => {
  console.log('http server running at http://127.0.0.1:3000')
})