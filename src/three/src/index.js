// 引入 sass
const sass = require('sass');
const path = require('path');

// 构造文件路径
const filePath = path.resolve(__dirname, './index.scss')

// 编译
const result = sass.compile(filePath);

// 打印结果
console.log(result.css)