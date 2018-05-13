main();

async function main(){
    // $.ajax({
    //     url: "contacts.json",
    //     success: function(){
    //
    //     },
    //     error: function (err) {
    //
    //     }
    // })

    try {
        const contacts = await httpGet("contacts.json");
    }
    catch(err){

    }

    // setTimeout(function(){
    //     console.log("OK");
    // }, 1000);
    //

    // const p1 = new Promise(function(resolve, reject){
    //     setTimeout(function(){
    //         resolve();
    //     }, 1000);
    // });
    //
    // await p1;
    // console.log("OK");

    //
    // p1.then(function(){
    //    console.log("OK");
    // });
    //
    // p1.catch(function(){
    //     console.log("FAIL");
    // })

    // const p2 = new Promise(function(resolve, reject){
    //
    // });
}