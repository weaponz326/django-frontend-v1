import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { DateTimePickerComponent } from 'smart-webcomponents-angular/datetimepicker';

import { SelectCustomerComponent } from '../../../select-windows/customers-windows/select-customer/select-customer.component';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  constructor() { }

  @ViewChild('orderCodeInputReference', { read: InputComponent, static: false }) orderCodeInput!: InputComponent;
  @ViewChild('orderDateTimePickerReference', { read: DateTimePickerComponent, static: false }) orderDateTimePicker!: DateTimePickerComponent;
  @ViewChild('customerNameInputReference', { read: InputComponent, static: false }) customerNameInput!: InputComponent;
  @ViewChild('orderTypeDropDownListReference', { read: DropDownListComponent, static: false }) orderTypeDropDownList!: DropDownListComponent;
  @ViewChild('orderStatusDropDownListReference', { read: DropDownListComponent, static: false }) orderStatusDropDownList!: DropDownListComponent;

  @ViewChild('selectCustomerComponentReference', { read: SelectCustomerComponent, static: false }) selectCustomer!: SelectCustomerComponent;

  selectedCustomerId: any;

  orderTypeSource: any[] = ["Sitting", "Delivery", "Drive Through", "Take Away"];
  orderStatusSource: any[] = ["Ordered", "Processing", "Delivered"];

  ngOnInit(): void {
  }

  onCustomerSelected(customerData: any){
    console.log(customerData);
    this.selectedCustomerId = customerData.id;
    this.customerNameInput.value = customerData.customer_name;
  }

}
