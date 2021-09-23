import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { InputComponent } from 'smart-webcomponents-angular/input';
import { ButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor() { }

  @ViewChild('countrySelectReference', { read: InputComponent, static: false }) countrySelectInput!: InputComponent;
  @ViewChild('stateSelectReference', { read: InputComponent, static: false }) stateSelectInput!: InputComponent;
  @ViewChild('citySelectReference', { read: InputComponent, static: false }) citySelectInput!: InputComponent;
  @ViewChild('saveButtonReference', { read: ButtonComponent, static: false }) saveButton!: ButtonComponent;

  @Output() locationEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  emitLocation(){
    let data = {
      country: this.countrySelectInput.value,
      state: this.stateSelectInput.value,
      city: this.citySelectInput.value,
    }

  	this.locationEvent.emit(data);
  }

}
