function test() {
    let x = 10;
    console.log(x)
}
test()

// lexical scope
function outer() {
    let xy = 20;
    function inner() {
        console.log(xy)
    }
    inner()

}
outer()