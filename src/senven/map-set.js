// hashMap 哈希表
const a = new Map()

// key 是用来计算地址的 address = f(key); address上存的就是value
// map.set(key, value)
a.set('name', 'aaa')
console.log(a)

// 数组去重
const b = new Set([1, 1, 1, 2, 3, 4, 5])
console.log(Array.from(b))