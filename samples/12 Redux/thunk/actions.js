function calc(){
    return function(dispatch, getState){
        dispatch(beginLoading());

        setTimeout(function(){
            dispatch({
                type: "CALC"
            });

            dispatch(endLoading());
        }, 1500);
    }
    // return {
    //     type: "CALC"
    // }
}

function reset(){
    return {
        type: "RESET",
    }
}

function setNum1(num1){
    return {
        type: "SET_NUM1",
        value: num1,
    }
}

function setNum2(num2){
    return {
        type: "SET_NUM2",
        value: num2,
    }
}

function beginLoading() {
    return {
        type: "SET_LOADING",
        value: true,
    }
}

function endLoading() {
    return {
        type: "SET_LOADING",
        value: false,
    }
}

module.exports = {
    calc,
    reset,
    setNum1,
    setNum2,
};
