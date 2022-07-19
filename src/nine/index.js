// 获取自己电脑上当前年月日
const date = new Date()
const yearMonDay = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

function getMyComputerDay() {
    
    return yearMonDay
}


// nodejs 模块导入导出
module.exports = {
    getDay: getMyComputerDay,
    a: 1
}