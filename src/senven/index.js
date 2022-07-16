// 静态作用域
// 根据词法推测的
// 全局作用域
var i = 1;
let b = 520;

// 块级别作用域
{
    console.log(i)
    // 块级别作用域
    {
        console.log(b)
    }
}

function test () {
    let c = 1;
}

// console.log(b)


// 动态作用域，单只this指向问题
const object = {
    name: 'pjw',
    skip: function() {
        console.log(this.name);
    }
}