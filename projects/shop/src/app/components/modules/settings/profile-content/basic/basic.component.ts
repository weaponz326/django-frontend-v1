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

  @ViewChild('nameInputReference', { read: InputComponent, static: false }) nameInput!: InputComponent;
  @ViewChild('locationInputReference', { read: InputComponent, static: false }) locationInput!: InputComponent;
  @ViewChild('aboutTextAreaReference', { read: MultilineTextBoxComponent, static: false }) aboutTextArea!: MultilineTextBoxComponent;
  @ViewChild('saveButtonReference', { read: ButtonComponent, static: false }) saveButton!: ButtonComponent;

  @Output() basicEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  emitBasic(){
    let data = {
      name: this.nameInput.value,
      location: this.locationInput.value,
      about: this.aboutTextArea.value
    }

  	this.basicEvent.emit(data);
  }

}
