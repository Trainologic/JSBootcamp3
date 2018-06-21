const {inc, dec} = require("./actions");
const {store} = require("./store");

let prevState = store.getState();
store.subscribe(function(){
    const state = store.getState();
    if(prevState == state){
        return;
    }

    console.log("CHANGED --> ", state);

    prevState = state;
})

store.dispatch(dec());
store.dispatch(dec());
store.dispatch(inc(0));
store.dispatch(dec());

//console.log(store.getState());
