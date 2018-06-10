import {appStore} from "./appStore";
import {Contact, getAllContacts, updateContact} from "./serverApi";
import {Component} from "react";

export class AppService {
    rootComponent: Component;

    async init(){
        console.log("init");

        this.beginLoading();

        try {
            const contacts = await getAllContacts();
            console.log("Data arrived from server", contacts);

            appStore.contacts = contacts;
        }
        finally {
            this.endLoading();
        }
    }

    beginLoading(){
        appStore.loading = true;
        this.updateUI();
    }

    endLoading(){
        appStore.loading = false;
        this.updateUI();
    }

    setRootComponent(comp: Component) {
        this.rootComponent = comp;
    }

    updateUI(){
        if(!this.rootComponent) {
            return;
        }

        this.rootComponent.forceUpdate();
    }

    select(contact: Contact) {
        console.log("select", contact);

        if(contact == appStore.selectedContact){
            return;
        }

        appStore.selectedContact = contact;
        appStore.updatingContactName = contact.name;

        this.updateUI();
    }

    updatingContactNameChanged(value: string) {
        appStore.updatingContactName = value;

        this.updateUI();
    }

    async save() {
        try {
            const {selectedContact} = appStore;

            const clone: Contact = {
                ...selectedContact,
                name: appStore.updatingContactName,
            };

            this.beginLoading();

            await updateContact(clone);

            selectedContact.name = appStore.updatingContactName;
            this.updateUI();
        }
        catch(err){
            this.onError(err);
        }
        finally {
            this.endLoading();
        }
    }

    onError(err: Error) {
        console.error("Error", err);

        appStore.error = err;

        this.updateUI();
    }
}

export const appService = new AppService();