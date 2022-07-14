const fs = require('fs')

// mkdirSync('./first-nodejs')
// 拿fd
const fd = fs.openSync('./test.txt')

// 定义回调函数
function readFile(err, bytesRead, buffer) {
    console.log(buffer.toString('utf-8'))
}

fs.read(fd, readFile)