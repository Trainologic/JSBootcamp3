import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

function reducer(state, action){
    if(action.type == "INC"){
        return add(state, action.counter, 1);
    }

    if(action.type == "DEC"){
        return add(state, action.counter, -1);
    }

    if(action.type == "SET_COUNTERS"){
        return setCounters(state, action.counters);
    }

    return state;
}

function add(state, counter, diff) {
    const index = state.counters.indexOf(counter);
    if(index == -1) {
        return state;
    }

    const newCounter = {
        ... counter,
        value: counter.value + diff,
    };

    const newCounters = state.counters.concat([]);
    newCounters[index] = newCounter;

    return {
        ... state,
        counters: newCounters,
    }
}

function setCounters(state, counters) {
    return {
        ... state,
        counters,
    }
}

const initialState = {
    counters: null,
}

export const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk));

console.log("store", store);
