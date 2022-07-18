const arr = ['name1', 'name2', 'name3']
const names = 'name1,name2,name3'

const handleNames = names.split(',')
console.log(handleNames)

const aimStr = arr.join(' ')
console.log(aimStr)

//
const str = '       pjw'
const formatStr = str.trim()
console.log(str, formatStr)

// substring 字符串切分
const anyString = "Mozilla";

// 输出 "Moz", 左闭右开区间
console.log(anyString.substring(0,3));

// 正则表达式
const phoneNum = '12312341234'
const regexp = /[0-9]/g;
const result = [...phoneNum.matchAll(regexp)]
console.log(result)

// obj => 模板上
// obj.number = 1
const template = '<div>{{number}}</div>'

const obj = {
    number: 1
}
// <div>1</div>
const html = template.replace('{{number}}', obj.number)
console.log(html)