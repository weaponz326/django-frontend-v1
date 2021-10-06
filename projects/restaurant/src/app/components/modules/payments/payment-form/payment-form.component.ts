import { Component, OnInit, ViewChild } from '@angular/core';

import { InputComponent } from 'smart-webcomponents-angular/input';
import { NumericTextBoxComponent } from 'smart-webcomponents-angular/numerictextbox';
import { DateTimePickerComponent } from 'smart-webcomponents-angular/datetimepicker';


@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  constructor() { }

  @ViewChild('paymentCodeInputReference', { read: InputComponent, static: false }) paymentCodeInput!: InputComponent;
  @ViewChild('paymentDateTimePickerReference', { read: DateTimePickerComponent, static: false }) paymentDateTimePicker!: DateTimePickerComponent;
  @ViewChild('orderCodeInputReference', { read: InputComponent, static: false }) orderCodeInput!: InputComponent;
  @ViewChild('totalAmountNumericTextBoxReference', { read: NumericTextBoxComponent, static: false }) totalAmountNumericTextBox!: NumericTextBoxComponent;
  @ViewChild('amountPaidNumericTextBoxReference', { read: NumericTextBoxComponent, static: false }) amountPaidNumericTextBox!: NumericTextBoxComponent;
  @ViewChild('balanceNumericTextBoxReference', { read: NumericTextBoxComponent, static: false }) balanceNumericTextBox!: NumericTextBoxComponent;

  ngOnInit(): void {
  }

}
