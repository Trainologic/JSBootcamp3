const {addContact} = require("./actions");
const {store} = require("./store");

main();

async function main(){
    store.subscribe(function(){
        console.log("CHANGED:", store.getState());
    });

    await store.dispatch(addContact("Udi"));
    await store.dispatch(addContact("Carmit"));
}


