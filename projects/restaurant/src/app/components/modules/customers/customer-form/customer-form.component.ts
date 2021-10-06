import { Component, OnInit, ViewChild } from '@angular/core';

import { InputComponent } from 'smart-webcomponents-angular/input';
import { MultilineTextBoxComponent } from 'smart-webcomponents-angular/multilinetextbox';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  constructor() { }

  @ViewChild('customerCodeInputReference', { read: InputComponent, static: false }) customerCodeInput!: InputComponent;
  @ViewChild('customerNameInputReference', { read: InputComponent, static: false }) customerNameInput!: InputComponent;
  @ViewChild('phoneInputReference', { read: InputComponent, static: false }) phoneInput!: InputComponent;
  @ViewChild('emailInputReference', { read: InputComponent, static: false }) emailInput!: InputComponent;
  @ViewChild('addressInputTextBoxReference', { read: MultilineTextBoxComponent, static: false }) addressTextBox!: MultilineTextBoxComponent;
  @ViewChild('stateInputReference', { read: InputComponent, static: false }) stateInput!: InputComponent;
  @ViewChild('cityInputReference', { read: InputComponent, static: false }) cityInput!: InputComponent;
  @ViewChild('postCodeInputReference', { read: InputComponent, static: false }) postCodeInput!: InputComponent;
  @ViewChild('allergiesTextBoxReference', { read: MultilineTextBoxComponent, static: false }) allergiesTextBox!: MultilineTextBoxComponent;
  @ViewChild('preferencesTextBoxReference', { read: MultilineTextBoxComponent, static: false }) preferencesTextBox!: MultilineTextBoxComponent;

  ngOnInit(): void {
  }

}
