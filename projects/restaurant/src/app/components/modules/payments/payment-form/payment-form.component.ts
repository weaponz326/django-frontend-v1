import { Component, OnInit, ViewChild } from '@angular/core';

import { InputComponent } from 'smart-webcomponents-angular/input';
import { NumericTextBoxComponent } from 'smart-webcomponents-angular/numerictextbox';
import { DateTimePickerComponent } from 'smart-webcomponents-angular/datetimepicker';

import { SelectOrderComponent } from '../../../select-windows/orders-windows/select-order/select-order.component';


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

  @ViewChild('selectOrderComponentReference', { read: SelectOrderComponent, static: false }) selectOrder!: SelectOrderComponent;

  selectedOrderId: any;

  ngOnInit(): void {
  }

  onOrderSelected(orderData: any){
    console.log(orderData);

    this.selectedOrderId = orderData.id;
    this.orderCodeInput.value = orderData.order_code;
    this.totalAmountNumericTextBox.value = orderData.total_amount;
  }

}
