import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { DobInputComponent } from '../../../../custom-widgets/dob-input/dob-input.component'


@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {

  constructor() { }

  @ViewChild('dobInputComponentReference', { read: DobInputComponent, static: false }) dobDateInput!: DobInputComponent;
  @ViewChild('genderDropDownListReference', { read: DropDownListComponent, static: false }) genderDropDownList!: DropDownListComponent;
  @ViewChild('saveButtonference', { read: ButtonComponent, static: false }) saveButton!: ButtonComponent;

  @Output() additionalEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  emitAdditional(){
    let data = {
      date_of_birth: this.dobDateInput.value,
      gender: this.genderDropDownList.value
    }

  	this.additionalEvent.emit(data);
  }

}
