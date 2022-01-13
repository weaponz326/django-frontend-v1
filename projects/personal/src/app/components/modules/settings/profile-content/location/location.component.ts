import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor() { }

  @Output() locationEvent = new EventEmitter<any>();

  locationForm: FormGroup = new FormGroup({});
  location = "";

  ngOnInit(): void {
    this.initLocationForm();
  }

  initLocationForm(){
    this.locationForm = new FormGroup({
      country: new FormControl(),
      state: new FormControl(),
      city: new FormControl(),
    })
  }

  emitLocation(){
    let data = {
      country: this.locationForm.controls.country.value,
      state: this.locationForm.controls.state.value,
      city: this.locationForm.controls.city.value,
    }

  	this.locationEvent.emit(data);
  }

  onAddressChange(address: any) {
    this.location = address.formatted_address;
    console.log(address);
  }

}
