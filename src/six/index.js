// function
// 1.分清楚函数的定义和执行，就看函数名后有没有 ()。如果有，就是再执行函数
// 2.普通函数和箭头函数
// 3.函数名可以作为变量，因此函数没有重载
// 4.理解函数的参数
//      1)参数可以随意传递
//      2)可以通过arguments拿到所有的参数, 箭头函数中没有arguments
//      3)缺省值，默认值
//      4)test.length 函数的命名参数个数
//      5)递归，斐波拉契数列
function test(params, params1, params2) {
    console.log(params, params1, params2)
}
const arr = [1, 2, 3]
test(...arr)
console.log(test.length)

// 5.递归容易爆栈
function fibonacci(n) {
    if (n == 1 || n == 2) {
        return 1
    }; // 1.有终止条件
    return fibonacci(n - 2) + fibonacci(n - 1);// 尾调用 //2. 自己调用自己
}
// console.log(fibonacci(0))


function qiuhe(param) {
    if (param === 1) {
        return 1;
    }
    // const result =  param + qiuhe(param - 1);
    return qiuhe(param - 1);
}

console.log(qiuhe(10))
// 6.this指向问题(apply, call, bind)
// 指向最近的对象
// 例1
// window.color = 'pjw'
// function printColor() {
//     console.log(this.color)
// }
// window.printColor();
// 例2
const obj = {
    color: 'green',
    showColor: function (param) {
        console.log(this, param)
    }
}
obj.showColor()
other = obj.showColor
// window.other()
// apply, call(直接执行函数，运行时改变this指向)    bind(返回一个函数，直接绑定对象，不会执行函数)
const theOtherObj = other.bind({color: 'black'})
theOtherObj()
other.apply(obj, ['hello'])
other.call(obj, 'hello')

function callTest(param) {
    console.log('param', param)
    console.log(this.noon)
}

const callBind = callTest.bind({noon: '11:24'})
callBind('中午了')

// 例3
const obj2 = {
    color: 'green',
    showObj: {
        color: 'blue',
        showColor: function () {
            console.log(this)
        }
    }
}
obj2.showObj.showColor()

