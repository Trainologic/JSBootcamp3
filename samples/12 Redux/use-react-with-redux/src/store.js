import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

function reducer(state, action){
    if(action.type == "INC"){
        return add(state, 1);
    }

    if(action.type == "DEC"){
        return add(state, -1);
    }

    return state;
}

function add(state, value) {
    return {
        ... state,
        counter: state.counter + value,
    }
}

const initialState = {
    counter: 0,
}

export const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk));

console.log("store", store);
