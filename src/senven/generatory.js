// 约定一下，不管如何，yield后面的值都返回promise
// generator.next().value -> promise


function* createIterator() {

    const result2Pramas = yield 2 // 第一步走到这


    console.log(result2Pramas)
    const result3Pramas = yield 1 // 第二部走到这


    console.log(result3Pramas)
    yield 3;                      // 第三步走到这
}

const generator = createIterator()
const result1 = generator.next('pjw').value
const result2 = generator.next('xixi').value
const result3 = generator.next('hahaha').value;
// const result4 = generator.next().value;
// console.log(result1)
// console.log(result2.then((value) => {console.log(value)}))
// console.log(result3.then((value) => {console.log(value)}))
// console.log(result4.then((value) => {console.log(value)}))