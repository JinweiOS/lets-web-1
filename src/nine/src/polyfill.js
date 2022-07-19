function sleep(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

async function main() {
    console.log('准备睡觉')
    await sleep();
    console.log('睡了3s醒了')
}

main()