import {delay} from "./helpers";

export async function getAllContacts(): Promise<Contact[]> {
    await delay(1000);

    const res = await fetch("/api/contact");
    const contacts = await res.json();

    return contacts;
}

export async function updateContact(contact: Contact) {
    await delay(2500);
    // throw new Error(`Contact ${contact.id} does not exist`);
}

export interface Contact {
    id: number;
    name: string;
}
