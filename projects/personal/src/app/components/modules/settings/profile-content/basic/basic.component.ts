import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { InputComponent } from 'smart-webcomponents-angular/input';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { MultilineTextBoxComponent } from 'smart-webcomponents-angular/multilinetextbox';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor() { }

  @ViewChild('firstNameInputReference', { read: InputComponent, static: false }) firstNameInput!: InputComponent;
  @ViewChild('lastNameInputReference', { read: InputComponent, static: false }) lastNameInput!: InputComponent;
  @ViewChild('locationInputReference', { read: InputComponent, static: false }) locationInput!: InputComponent;
  @ViewChild('aboutTextAreaReference', { read: MultilineTextBoxComponent, static: false }) aboutTextArea!: MultilineTextBoxComponent;
  @ViewChild('saveButtonference', { read: ButtonComponent, static: false }) saveButton!: ButtonComponent;

  @Output() basicEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  emitBasic(){
    let data = {
      first_name: this.firstNameInput.value,
      last_name: this.lastNameInput.value,
      location: this.locationInput.value,
      about: this.aboutTextArea.value
    }

  	this.basicEvent.emit(data);
  }

}
