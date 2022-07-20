const tagFunc = []

const BeanContaner = new Map()
@Bean()
class C {
    constructor() {
        this.name = 'pjw'
    }
    @Tag() method(tag) { 
        console.log(tag)
    }
    @Tag()
    method2() {

    }
}

function Tag() {
    return (target, key, descriptor) => {
        console.log(target)
        tagFunc.push(target)
        console.log()
        return descriptor;
    };
}

function Bean() {
    return (target, key, descriptor) => {
        console.log(target, key)
        // 拿到构造函数
        const a = new key.constructor()
        BeanContaner.set('C', a)
    };
}

const autoC = BeanContaner.get('C')
console.log(autoC)