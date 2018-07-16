import { Injectable } from '@angular/core';
import {appStore, Contact} from './app.store';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor() {
  }

  loadAllContacts(): Promise<Contact[]> {
    return Promise.resolve(appStore.contacts);
  }

  reload() {
    appStore.contacts = [
      {id:1, name: "Ori"},
      {id:2, name: "Roni"},
      {id:3, name: "Udi"},
    ]
  }
}
