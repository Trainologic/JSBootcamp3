const {createStore} = require("redux");
const {rootReducer} = require("./reducers");

const initialState = {
    counter: 0,
};

const store = createStore(rootReducer, initialState);

exports.store = store;

