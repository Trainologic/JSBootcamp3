import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../app.store';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  @Input() contact: Contact;
  @Output() onContactDelete: EventEmitter<Contact> = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit() {
  }

  remove(){
    this.onContactDelete.emit(this.contact);
  }
}
