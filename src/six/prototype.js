// 8.原型，原型链

// 构造函数
function People() {
    this.name = 'pjw';
    this.age = '12345';

    this.drink =  function() {
        console.log(this.name, this.age)
    }
}
// 给原型上添加一些属性
People.prototype.dna = 'dnaxulie'
// 1.创建一个空对象
// 2.改变this指向，将构造函数的this，指向新创建的对象
const t1 = new People();
t1.__proto__
const t2 = new People();
t2.name = 'pepsi'
console.log(typeof t2, typeof People.prototype)
console.log(t1)
t1.drink();



