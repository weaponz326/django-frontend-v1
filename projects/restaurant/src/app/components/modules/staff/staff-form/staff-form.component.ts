import { Component, OnInit, ViewChild } from '@angular/core';

import { InputComponent } from 'smart-webcomponents-angular/input';
import { MultilineTextBoxComponent } from 'smart-webcomponents-angular/multilinetextbox';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';

import { DobInputComponent } from 'projects/personal/src/app/components/custom-widgets/dob-input/dob-input.component'
import { ImageUploadComponent } from 'projects/personal/src/app/components/custom-widgets/image-upload/image-upload.component'


@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.scss']
})
export class StaffFormComponent implements OnInit {

  constructor() { }

  @ViewChild('firstNameInputReference', { read: InputComponent, static: false }) firstNameInput!: InputComponent;
  @ViewChild('lastNameInputReference', { read: InputComponent, static: false }) lastNameInput!: InputComponent;
  @ViewChild('sexDropDownListReference', { read: DropDownListComponent, static: false }) sexDropDownList!: DropDownListComponent;
  @ViewChild('dobCustomWidgetReference', { read: DobInputComponent, static: false }) dobCustomWidget!: DobInputComponent;
  @ViewChild('imageCustomWidgetUpload', { read: ImageUploadComponent, static: false }) photoCustomWidget!: ImageUploadComponent;
  @ViewChild('nationalityInputReference', { read: InputComponent, static: false }) nationalityInput!: InputComponent;
  @ViewChild('religionInputReference', { read: InputComponent, static: false }) religionInput!: InputComponent;
  @ViewChild('phoneInputReference', { read: InputComponent, static: false }) phoneInput!: InputComponent;
  @ViewChild('emailInputReference', { read: InputComponent, static: false }) emailInput!: InputComponent;
  @ViewChild('addressTextBoxReference', { read: MultilineTextBoxComponent, static: false }) addressTextBox!: MultilineTextBoxComponent;
  @ViewChild('stateInputReference', { read: InputComponent, static: false }) stateInput!: InputComponent;
  @ViewChild('cityInputReference', { read: InputComponent, static: false }) cityInput!: InputComponent;
  @ViewChild('postCodeInputReference', { read: InputComponent, static: false }) postCodeInput!: InputComponent;
  @ViewChild('staffCodeInputReference', { read: InputComponent, static: false }) staffCodeInput!: InputComponent;
  @ViewChild('departmentInputReference', { read: InputComponent, static: false }) departmentInput!: InputComponent;
  @ViewChild('jobInputReference', { read: InputComponent, static: false }) jobInput!: InputComponent;

  ngOnInit(): void {
  }

}
