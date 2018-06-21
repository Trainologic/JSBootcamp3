function dec(){
    return {
        type: "DEC"
    }
}

function inc(value){
    return {
        type: "INC",
        value,
    }
}

module.exports = {
    dec,
    inc,
};
