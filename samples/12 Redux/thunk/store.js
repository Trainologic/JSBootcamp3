const {createStore, applyMiddleware} = require("redux");
const {rootReducer} = require("./reducers");
const thunk = require("redux-thunk").default;

console.log("thunk", thunk);

const initialState = {
    num1: "",
    num2: "",
    result: "",
    loading: false,
};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk));

console.log("store", store);

exports.store = store;

