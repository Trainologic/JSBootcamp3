const {delay} = require("./helpers");

function addContact(name) {
    return async function(dispatch) {
        // setTimeout(function(){
        //     dispatch(internalAddContact(name));
        // }, 1000);

        await delay(1000);
        dispatch(internalAddContact(name));
    }
}

function internalAddContact(name) {
    return {type: "ADD_CONTACT", name};
}

module.exports = {
    addContact,
}
