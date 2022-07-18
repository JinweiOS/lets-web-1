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