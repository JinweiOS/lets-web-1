// generator + promise => 干掉链式调用

// const myPrimose = new Promise((resolve, reject) => {
//     // 把promise由pending状态转换为fulfilled
//     setTimeout(() => {
//         resolve('钻石')
//     }, 3000)
//     // reject('可惜不是你')
// })

// myPrimose.then((value) => console.log(value))

function* getMything() {
    const myPrimose1 = new Promise((resolve, reject) => {
        // 把promise由pending状态转换为fulfilled
        setTimeout(() => {
            console.log(1)
            resolve('钻石')
        }, 3000)
        // reject('可惜不是你')
    })
    yield myPrimose1;
    const myPrimose2 = new Promise((resolve, reject) => {
        // 把promise由pending状态转换为fulfilled
        setTimeout(() => {
            console.log(2)
            resolve('钻石')
        }, 6000)
        // reject('可惜不是你')
    })
    yield myPrimose2;
    const myPrimose3 = new Promise((resolve, reject) => {
        // 把promise由pending状态转换为fulfilled
        setTimeout(() => {
            console.log(3)
            resolve('钻石')
        }, 9000)
        // reject('可惜不是你')
    })
    yield myPrimose3;
}

const promiseGenerator = getMything();
const r1 = promiseGenerator.next().value;
const r2 = promiseGenerator.next().value;
const r3 = promiseGenerator.next().value;

r1.then((value) => console.log(value))
r2.then((value) => console.log(value))
r3.then((value) => console.log(value))
console.log('hahaha')
