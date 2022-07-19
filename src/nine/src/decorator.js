class C {
    @Tag() method() { }
    @Tag()
    method2() {

    }
}
globalThis.tagFunc = []


function Tag() {
    const a = globalThis.tagFunc;
    return (target, key, descriptor) => {
        console.log(target)
        console.log(a)
        a.push(target)
        return descriptor;
    };
}

console.log(tagFunc)