import { Component } from '@angular/core';
import {ContactService} from './contact.service';
import {appStore, Contact} from './app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private contactService: ContactService) {
  }

  async ngOnInit() {
    this.contactService.loadAllContacts();
  }

  onContactDelete(contact: Contact){
    const index = this.contacts.indexOf(contact);
    if(index != -1) {
      this.contacts.splice(index, 1);
    }
  }

  get contacts(){
    return appStore.contacts;
  }
}
