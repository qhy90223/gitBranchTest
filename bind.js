Function.prototype.myBind = function(context){
    this.fn=context
    const args = Array.slice(1)
    return fn(...args)
}
function test(key){
    console.log(this);
    
    return key
}
const b={
    a:1,
    b:2,
    c:3
}
test.myBind(b,3333)
