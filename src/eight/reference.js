// Pass as value
const cup = 0

function fillCup(params) {
    params = 10;
}

fillCup(cup)

console.log(cup)

// pass as Object
const cup2 = {
    capacity: 0
}

function fillCup2(params) {
    params.capacity = 10
}

fillCup2(cup2)

console.log(cup2)


// 对象
const originData = {
    important: 40,
    success: () => console.log('success')
}

// 深拷贝()
const temp = Object.assign({}, originData);
// 不会丢掉函数

temp.important = 400
console.log(temp, originData)

// json
const jsonTemp = JSON.parse(JSON.stringify(originData))