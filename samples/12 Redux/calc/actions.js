function calc(){
    return {
        type: "CALC"
    }
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

module.exports = {
    calc,
    reset,
    setNum1,
    setNum2,
};
