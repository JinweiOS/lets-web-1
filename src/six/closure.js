// 7.闭 包
function handleSummber() {
    const innerStr = '123556'
    const str = '12356'
    return function() {
        return str;
    }
}

const resultFunction = handleSummber()
console.log(resultFunction)
console.log(resultFunction())

// 示例1
const test = '1234567'
function printf(param) {
    console.log(param)
}
printf(test)

// 示例2
// 函数直接引用外层变量构成闭包，闭包里面装的就是外层变量
function printf2() {
    console.log(test)
}
printf2()