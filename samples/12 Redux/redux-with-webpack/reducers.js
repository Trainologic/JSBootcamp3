const handlers = {
    "INC": inc,
    "DEC": dec,
}

function rootReducer(state, action) {
    const handler = handlers[action.type];
    if(handler) {
        return handler(state, action);
    }

    return state;
}

function inc(state, action) {
    const value = (action.value === undefined ? 1 : action.value);

    if(value === 0){
        return state;
    }

    return {
        counter: state.counter + value,
    };
}

function dec(state) {
    return {
        counter: state.counter - 1,
    };
}

exports.rootReducer = rootReducer;