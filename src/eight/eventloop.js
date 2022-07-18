// eventloop 事件循环 (1,3,4,7,6)
// 1.micro task[promise(then, catch, finally), ]  2.macro tack[setTimeout]
const promise1 = new Promise((resolve, reject) => {
    console.log('1-promise1')
    resolve() // resolve之后，then的callback才可以执行
    // 没有reslove
})
// then注册微任务(按照层级向microtaskqueue推送任务)
promise1.then(() => {
    console.log('2-');
    return new Promise((resolve) => resolve())
}).then(() => { console.log('2-1'); return new Promise((resolve) => resolve()) }).then(() => console.log('2-2'));
console.log('3-', promise1);

const fn = () => (new Promise((resolve, reject) => {
    console.log('4-');
    resolve('5-success')
}))
fn().then(res => {
    console.log('6-', res)
})
console.log('7-start')

setTimeout(() => console.log('8-'), 0)


async function sleepTest() {
    console.log('哈哈哈，马上卡三秒')
    await sleep(3000)
    console.log('三秒了')
}

function sleep(time) {
    return new Promise(resolve => {
        setTimeout(() => {resolve()}, time)
    })
}

sleepTest(3000)

let result = []
// 闭包 + 宏任务
function test() {
    //变量提升、函数作用域 i = undefined; i = 10
    for(var i = 0; i < 10; i++) {
        setTimeout(() => console.log(i))
        // result[i] = function() {
        //     return i
        // }
        // result[i] = (function(param) {return param})(i)
        // console.log(i)
    }
}
test()
// 1.怎么打印都是10
// console.log('题目', result[0]())
// console.log('题目', result[1]())
// 2.怎么实现正常打印
console.log('题目', result[9]) // IIFE

// test()