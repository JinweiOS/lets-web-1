// const exampleStr = "这是一个字符串"
// const str1 = '1234'
// const a = 7894
// const exampleMultipleStr = `${a}多行就是好用${str1}`
// // console.log(exampleMultipleStr + "dddd\ndddd")
// const b = a.toString(2)
// console.log(b)

// // 初始化
// const obj = {
//     name: 'pjw'
// }

// // 增加
// obj['age'] = 12

// // 删除
// delete obj.name

// // 修改
// obj.age = 20
// obj['age'] = 20

// // 查询
// console.log(obj.age)
// console.log(obj['age'])

// // 以变量的方式
// const property = 'sex'
// obj[property] = '男'
// const sexSym = Symbol('sex')
// const otherSym = Symbol('sex')
// obj[sexSym] = '女'
// obj[otherSym] = '女'
// console.log(obj)


// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i)
// }

switch ('1111') {
    case 'pjw': ;
    case '111': console.log('镇江'); break;
    default: console.log('没找着')
}


function sayHi(name, message) {
    console.log(`hello ${name}, ${message}`);
} 

sayHi('pjw')
// 变量提升
function test1() {
    console.log(i)
    var i = 13;
}
test1()

// 暂时性死区
// Uncaught ReferenceError: Cannot access 'i' before initialization
function test2() {
    console.log(j)
    let j = 13
}
test2()

// Uncaught ReferenceError: i is not defined
function test3() {
    console.log(p)
    p = 13;
}
test3()