const {createStore, applyMiddleware} = require("redux");
const thunk = require("redux-thunk").default;

function reducer(state, action){
    if(action.type == "ADD_CONTACT"){
        return addContact(state, action);
    }

    return state;
}

function addContact(state, action) {
    const id = state.nextId;
    const nextId = state.nextId - 1;

    return {
        ... state,
        nextId,
        contacts: state.contacts.concat([{id: id, name: action.name}])
    }
}

const initialState = {
    nextId: -1,
    contacts: [
        {id: 1, name: "Ori"},
        {id: 2, name: "Roni"},
    ]
}

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk));

exports.store = store;
