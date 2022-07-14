// const arr = ['haha', 'haha1', 'xixi']
// const arr1 = [1, 2, 3, 4]
// const arr2 = [false, true]
// const arr3 = [{ name: 'pjw' }, { name: 'wy' }]
// console.log(arr.length)
// console.log(arr1.length)
// console.log(arr2)
// console.log(arr3.length)

// push
// pop

// shift
// unshift

// forEach
// map
// some
// filter

// sort
// reverse

// splice
// slice
// find

/**
 * 1.栈
 */
// const stack = []
// // size
// size = stack.length;
// stack.push(1)
// stack.push(2)
// stack.push(4)
// stack.push(3)

// stack.pop()
// stack.pop()
// console.log(stack)

/**
 * 2.队列
 */
// const queue = [1]
// queue.unshift(2)
// queue.unshift(3)
// queue.pop()
// console.log(queue)


/**
 * 3.数组遍历
 */

Array.prototype.arrIt2 = arrIt2

function arrIt2(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}
const iteratorArray = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < iteratorArray.length; i++) {
//     console.log(iteratorArray[i])
// }
function test(value, index, arr) {
    console.log(value, index, arr)
}
// // 原生方法
// iteratorArray.forEach(test);
// // 山寨方法1
// arrIt(iteratorArray, test)
// 山寨方法2
// iteratorArray.arrIt2(test)

// 平台api实现了一边
function arrIt(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}

/**
 * 4.数组遍历带返回值
 */
const arr4 = [1, 2, 4, 5]
function test4(value) {
    const i = value + 1;
    return i
}
const arr4back = arr4.map(test4)
console.log(arr4, arr4back)





