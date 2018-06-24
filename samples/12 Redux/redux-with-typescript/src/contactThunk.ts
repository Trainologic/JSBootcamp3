import {Contact} from "./appState";
import {SET_CONTACTS} from "./actionTypes";

export function loadAll() {
    return dispatch => {
        const contacts = [
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
        ];

        dispatch(setAll(contacts));
    }
}

function setAll(contacts: Contact[]) {
    return {
        type: SET_CONTACTS,
        contacts,
    }
}
