const handlers = {
    "CALC": calc,
    "RESET": reset,
    "SET_NUM1": setNum1,
    "SET_NUM2": setNum2,
    "SET_LOADING": setLoading,
}

function rootReducer(state, action) {
    const handler = handlers[action.type];
    if(handler) {
        return handler(state, action);
    }

    return state;
}

function calc(state, action) {
    const {num1, num2} = state;

    if(num1==="" && num2 ===""){
        return {
            ...state,
            result: "",
        }
    }

    const result = parseInt(num1) + parseInt(num2);

    console.log("calc", num1, num2, result);

    return {
        ... state,
        result,
    };
}

function reset() {
    return {
        num1: "",
        num2: "",
        result: "",
    }
}

function setNum1(state, action) {
    const {num1, num2} = state;

    return {
        ...state,
        num1: action.value,
    }
}

function setNum2(state, action) {
    const {num1, num2} = state;

    return {
        ...state,
        num2: action.value,
    }
}

function setLoading(state, action) {
    return {
        ...state,
        loading: action.value,
    }
}

exports.rootReducer = rootReducer;