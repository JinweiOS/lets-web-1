const http = require('http');
const fs = require('fs')
const path = require('path')

const hostname = '10.3.21.236';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // res.setHeader('Content-Type', 'application/octet-stream');
  // // 设置响应的形式
  // res.setHeader('Content-Disposition', 'attachment; filename="ubuntu.iso"')
  // 对于简单请求设置头部
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', ['X-name'])
  res.setHeader('Access-Control-Allow-Methods', ['PUT', 'OPTIONS'])
  // const filePath = path.join(__dirname, './ubuntu.iso')
  // const fileSize = fs.statSync(filePath).size;
  // res.setHeader('Content-Length', fileSize)
  // fs.createReadStream(filePath).pipe(res);
  const returnObj = {
    success: 0,
    data: {
      name: 'pjw',
      age: 23,
      location: '镇江'
    }
  }
  res.end(JSON.stringify(returnObj))
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});