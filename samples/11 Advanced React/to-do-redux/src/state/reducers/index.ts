import * as Redux from "redux";
import {combineReducers} from "redux";

import {IToDoItem, VISIBILITY_FILTER} from "../../types";

export interface IAppStoreState {
    todos: IToDoItem[];
    visibilityFilter: VISIBILITY_FILTER
}

const defaultState: IAppStoreState = {
    todos: [],
    visibilityFilter: "SHOW_ALL"
};

function AppReducer(state: IAppStoreState = defaultState, action: Redux.Action) {
    return state;
}

export default combineReducers({AppReducer});