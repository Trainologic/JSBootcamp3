const {createStore} = require("redux");

const initialState = {
    counter: 0,
};

function reducer(state, action) {
    if(action.type == "INC") {
        return {
            counter: state.counter + 1,
        };
    }

    if(action.type == "DEC"){
        return {
            counter: state.counter - 1,
        };
    }

    return state;
}

const store = createStore(reducer, initialState);

store.dispatch({
    type: "DEC"
});

console.log(store.getState());
