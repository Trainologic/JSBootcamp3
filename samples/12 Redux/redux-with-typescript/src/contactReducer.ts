import {AppState, Contact} from "./appState";

export function setContacts(state: AppState, contacts: Contact[]): AppState {
    return {
        ...state,
        contacts,
    }
}