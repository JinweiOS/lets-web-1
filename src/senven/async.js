function drink(action) {
    setTimeout(action, 7000)
}

const nice = () => {
    console.log("真好喝")
}

function eat() {
    console.log('eat')
}

drink(nice)
eat()

// setTimeout(() => console.log('时间到了'), 10000)
console.log('时间没到')
console.log('时间没到')
console.log('时间没到')
console.log('时间没到')
console.log('时间没到')
console.log('时间没到')