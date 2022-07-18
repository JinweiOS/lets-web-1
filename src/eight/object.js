// 1.freeze
const a = {
    name: 'pjw'
}
Object.freeze(a)
a.name = 1
console.log(a.name)


// 2.assign
const target = { name: 'pjw', age: 'sss' };
const source = { gpa: 4.0, class: 5 };
const returnedTarget = Object.assign({}, target, source);

console.log(target)
console.log(returnedTarget);

// 3.对象的遍历
const hero = {
    name: '孙尚香',
    duck: 'gun'
}

const keys = Object.keys(hero)
console.log(keys)
const values = Object.values(hero)
console.log(values)
const keysValues = Object.entries(hero).forEach(item => {
    console.log(item[0], item[1])
});
