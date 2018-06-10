import {Contact} from "./serverApi";

export interface AppStore {
    contacts: Contact[];
    selectedContact: Contact;
    loading: boolean;
    updatingContactName: string;
    error: Error;
}

export const appStore: AppStore = {
    contacts: null,
    selectedContact: null,
    loading: false,
    updatingContactName: null,
    error: null,
}

