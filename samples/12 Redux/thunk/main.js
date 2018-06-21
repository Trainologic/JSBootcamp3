const {calc, reset, setNum1, setNum2} = require("./actions");
const {store} = require("./store");

let input1;
let input2;
let spanResult;
let buttonCalc;
let buttonReset;
let h2Loading;

init();

function init(){
    input1 = getElement("input.num1");
    input2 = getElement("input.num2");
    spanResult = getElement("span.result");
    buttonCalc = getElement("button.calc");
    buttonReset = getElement("button.reset");
    h2Loading = getElement("h2.loading");

    input1.addEventListener("input", onNum1Changed);
    input2.addEventListener("input", onNum2Changed);
    buttonCalc.addEventListener("click", onCalc);
    buttonReset.addEventListener("click", onReset);

    store.subscribe(render);
}

function render(){
    const {num1, num2, result, loading} = store.getState();

    console.log("render", num1, num2, result);

    input1.value = num1;
    input2.value = num2;
    spanResult.innerText = result;

    if(loading){
        h2Loading.classList.add("active");
    }
    else {
        h2Loading.classList.remove("active");
    }
}

function onCalc(){
    console.log("calc");

    store.dispatch(calc());
}

function onReset(){
    console.log("reset");

    store.dispatch(reset());
}

function onNum1Changed(){
    store.dispatch(setNum1(input1.value));
}

function onNum2Changed(){
    store.dispatch(setNum2(input2.value));
}

function getElement(selector){
    const elem = document.querySelector(selector);
    if(!elem){
        throw new Error("Element " + selector + " was not found");
    }

    return elem;
}



//
// let prevState = store.getState();
// store.subscribe(function(){
//     const state = store.getState();
//     if(prevState == state){
//         return;
//     }
//
//     console.log("CHANGED --> ", state);
//
//     prevState = state;
// })
//
// store.dispatch(dec());
// store.dispatch(dec());
// store.dispatch(inc(0));
// store.dispatch(dec());
// store.dispatch(dec());
//
// //console.log(store.getState());
