import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { InputComponent } from 'smart-webcomponents-angular/input';
import { MultilineTextBoxComponent } from 'smart-webcomponents-angular/multilinetextbox';
import { ButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  @ViewChild('emailInputReference', { read: InputComponent, static: false }) emailInput!: InputComponent;
  @ViewChild('phoneInputReference', { read: InputComponent, static: false }) phoneInput!: InputComponent;
  @ViewChild('addressTextAreaReference', { read: MultilineTextBoxComponent, static: false }) addressTextArea!: MultilineTextBoxComponent;
  @ViewChild('saveButtonReference', { read: ButtonComponent, static: false }) saveButton!: ButtonComponent;

  @Output() contactEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  emitContact(){
    let data = {
      email: this.emailInput.value,
      phone: this.phoneInput.value,
      address: this.addressTextArea.value
    }

  	this.contactEvent.emit(data);
  }

}
