class ContactList {
    constructor(){
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
            {id:3, name: "Udi"},
        ];
    }

    remove(item){
        const index = this.contacts.findIndex(i => i == item);
        if(index != -1){
            this.contacts.splice(index, 1);
        }
    }
}

window.ContactList = ContactList;