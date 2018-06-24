function inc() {
    return {type: "INC"};
}

function dec() {
    return {type: "DEC"};
}

module.exports = {
    inc,
    dec,
}
