// setImmediate -> Check handlers/Queue
// process.nextTick
// setTimeout -> timer Queue

function add(a,b){

    console.log(a+b);
}

setImmediate(()=>{

    add(2,3);
    console.log("setImmediate");
})

setTimeout(()=>{

    add(4,3);
    console.log("setTimeout");
})

process.nextTick(()=>{

    add(3,3);
    console.log("process.nextTick");
})