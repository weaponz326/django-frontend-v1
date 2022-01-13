import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { BdayInputComponent } from '../../../../module-utilities/bday-input/bday-input.component'


@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {

  constructor() { }

  @ViewChild('bdayInputComponentReference', { read: BdayInputComponent, static: false }) bdayInput!: BdayInputComponent;

  @Output() additionalEvent = new EventEmitter<any>();

  additionalForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initAdditionalForm();
  }

  initAdditionalForm(){
    this.additionalForm = new FormGroup({
      gender: new FormControl(),
    })
  }

  emitAdditional(){
    let data = {
      date_of_birth: this.bdayInput.value,
      gender: this.additionalForm.controls.gender.value
    }

  	this.additionalEvent.emit(data);
  }

}
