import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor() { }

  @Output() basicEvent = new EventEmitter<any>();

  basicForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initBasicForm();
  }

  initBasicForm(){
    this.basicForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      // location: new FormControl(''),
      about: new FormControl('')
    })
  }

  emitBasic(){
    let data = {
      first_name: this.basicForm.controls.firstName.value,
      last_name: this.basicForm.controls.lastName.value,
      // location: this.basicForm.controls.location.value,
      about: this.basicForm.controls.aboutText.value
    }

  	this.basicEvent.emit(data);
  }

}
