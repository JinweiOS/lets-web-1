// 面向对象
class People {
    #name;
    age;
    height;
    static #count = 0;
    // 一个类必须有constructor()方法，如果没有显式定义，一个空的constructor()方法会被默认添加
    constructor(name, age, height) {
        this.#name = name;
        this.age = age;
        this.height = height
    }

    getName() {
        return this.#name;
    }

    setName(param) {
        this.name = param
    }

    static getCount() {
        return this.#count;
    }
}

// const p1 = new People('pjw', '23', '180cm')
// const p2 = new People('pepsi', '1', '20cm')
// console.log(p1.getName())
// p2.setName('tongyi')
// console.log(p2.getName())
// console.log(People.getCount())

// 单例模式
class Single {
    #name = 'pjw';
    getName() {
        return this.#name;
    }
    setName(name) {
        this.#name = name;
    }
    useSkill() {
        console.log('睡觉')
    }

    static #instance = null;

    static getSingleInstance() {
        if (!this.#instance) {
            this.#instance = new Single();
        }
        return this.#instance;
    }
}

const singleObj = Single.getSingleInstance()
// console.log(singleObj.getName())
singleObj.setName('单例模式')
const secondObj = Single.getSingleInstance();
console.log(secondObj.getName())


// 继承
class God extends People {
    #skill = [];
    constructor(name, age, height, skill) {
        super(name,  age, height)
        this.#skill = [skill];
    }

    useSkill() {
        if (this.#skill.length === 0) {
            console.log('施不了法')
            return;
        }
        const aSkill = this.#skill.pop();
        aSkill();
    }

    getSkill(fn) {
        this.#skill.push(fn)
    }
}

const sonBoy = new God('haha', '+', '欲与天公试比高', ()=> {console.log('fly')});
// console.log(sonBoy.getName());
// sonBoy.useSkill()
// sonBoy.getSkill(() => {console.log('吃饭')})
// sonBoy.useSkill()
// sonBoy.useSkill()






