// async await
// 1. 截至目前，使用await关键字时，必须再async函数内部
// 2. await 关键字可以直接支持promise类型的异步函数，并解构其resolve的值
function dataSource() {
    return new Promise((resolve, reject) => {
        resolve('这真好用')
    })
}
function p1() {
    // const result = await dataSource()
    return new Promise((resolve, reject) => {
        // 把promise由pending状态转换为fulfilled
        setTimeout(() => {
            console.log(3)
            resolve('钻石')
        }, 3000)
        // reject('可惜不是你')
    })
}

function p2() {
    // const result = await dataSource()
    return new Promise((resolve, reject) => {
        // 把promise由pending状态转换为fulfilled
        setTimeout(() => {
            console.log(3)
            resolve('钻石')
        }, 3000)
        // reject('可惜不是你')
    })
}
function p3() {
    // const result = await dataSource()
    return new Promise((resolve, reject) => {
        // 把promise由pending状态转换为fulfilled
        setTimeout(() => {
            console.log(3)
            resolve('钻石')
        }, 3000)
        // reject('可惜不是你')
    })
}
async function test() {
    let result = await p1();
    console.log(result)
    result = await p2();
    console.log(result)
    result = await p3();
    console.log(result)
}

test()