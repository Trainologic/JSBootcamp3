const {createStore} = require("redux");
const {rootReducer} = require("./reducers");

const initialState = {
    num1: "",
    num2: "",
    result: "",
};

const store = createStore(rootReducer, initialState);

console.log("store", store);

exports.store = store;

