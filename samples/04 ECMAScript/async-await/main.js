wrap();

async function wrap(){
    console.log("B");
    const p = main();
    p.then(function(){
        console.log("A");
    })
}

async function main(){
    await delay(1000);
    console.log("After 1000");
    await delay(2000);
    console.log("After more 2000");
}

function delay(ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, ms);
    })
}

// function delay(ms) {
//     setTimeout(function(){
//
//     }, ms);
// }
