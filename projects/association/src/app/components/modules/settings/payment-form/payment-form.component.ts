import { Component, OnInit, ViewChild } from '@angular/core';

import { InputComponent } from 'smart-webcomponents-angular/input';
import { ButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  constructor() { }

  @ViewChild('nameInputReference', { read: InputComponent, static: false }) nameInput!: InputComponent;
  @ViewChild('cardNNumbernputReference', { read: InputComponent, static: false }) cardNumberInput!: InputComponent;
  @ViewChild('expiryMonthInputReference', { read: InputComponent, static: false }) expiryMonthInput!: InputComponent;
  @ViewChild('expiryYearInputReference', { read: InputComponent, static: false }) expiryYearInput!: InputComponent;
  @ViewChild('cvcInputReference', { read: InputComponent, static: false }) cvcInput!: InputComponent;
  @ViewChild('buttonReference', { read: ButtonComponent, static: false }) button!: ButtonComponent;

  ngOnInit(): void {
  }

}
