import {Action, AnyAction, applyMiddleware, createStore, Dispatch, Reducer, Unsubscribe} from "redux";
import {AppState} from "./appState";
import thunk from "redux-thunk";
import {SET_CONTACTS} from "./actionTypes";
import {setContacts} from "./contactReducer";

const initialState: AppState = {
    contacts: null,
};

function rootReducer(state: AppState, action: AnyAction): AppState {
    if(action.type == SET_CONTACTS) {
        return setContacts(state, action.contacts);
    }

    return state;
}

interface AppStore {
    dispatch: Dispatch<Action | any>;
    getState(): AppState;
    subscribe(listener: () => void): Unsubscribe;
}

export const store: AppStore = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
);
