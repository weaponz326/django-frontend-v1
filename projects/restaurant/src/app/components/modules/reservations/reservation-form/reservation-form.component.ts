import { Component, OnInit, ViewChild } from '@angular/core';

import { InputComponent } from 'smart-webcomponents-angular/input';
import { NumericTextBoxComponent } from 'smart-webcomponents-angular/numerictextbox';
import { DateTimePickerComponent } from 'smart-webcomponents-angular/datetimepicker';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';

import { SelectCustomerComponent } from '../../../select-windows/customers-windows/select-customer/select-customer.component';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {

  constructor() { }

  selectedCustomerId: any;

  @ViewChild("reservationInputCodeReference", { read: InputComponent, static: false }) reservationCodeInput!: InputComponent;
  @ViewChild("reservationDateTimePickerReference", { read: DateTimePickerComponent, static: false }) reservationDateTimePicker!: DateTimePickerComponent;
  @ViewChild("customerNameInputReference", { read: InputComponent, static: false }) customerNameInput!: InputComponent;
  @ViewChild("guestsNumberNumericTextBoxReference", { read: NumericTextBoxComponent, static: false }) numberGuestsNumericTextBox!: NumericTextBoxComponent;
  @ViewChild("tablesNumberNumericTextBoxReference", { read: NumericTextBoxComponent, static: false }) numberTablesNumericTextBox!: NumericTextBoxComponent;
  @ViewChild("arrivalDateTimePickerReference", { read: DateTimePickerComponent, static: false }) arrivalDateTimePicker!: DateTimePickerComponent;
  @ViewChild("reservationStatusDropDownListReference", { read: DropDownListComponent, static: false }) reservationStatusDropDownList!: DropDownListComponent;

  @ViewChild('selectCustomerComponentReference', { read: SelectCustomerComponent, static: false }) selectCustomer!: SelectCustomerComponent;

  ngOnInit(): void {
  }

  onCustomerSelected(customerData: any){
    console.log(customerData);

    this.selectedCustomerId = customerData.id;
    this.customerNameInput.value = customerData.customer_code;
  }

}
