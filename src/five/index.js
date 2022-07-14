// 回调函数
function dayFive(msg) {
    console.log(msg)
}

// Object
const paramsWrapper = {
    callback: dayFive
}

// 传递对象
handle(paramsWrapper)

// 平台函数
// 支持传递一个函数，callback 函数可以传递参数，参数为字符串
function handle(object) {
    const str = '这是剪贴板的内容'
    object['callback'](str)
}








// wx.setClipboardData()
// 所有的参数都要传递