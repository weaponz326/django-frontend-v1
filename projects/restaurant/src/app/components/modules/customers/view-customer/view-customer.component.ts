import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { CustomersApiService } from 'projects/restaurant/src/app/services/modules/customers-api/customers-api.service';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {

  constructor(
    private router: Router,
    private customersApi: CustomersApiService
  ) { }

  @ViewChild('customerFormComponentReference', { read: CustomerFormComponent, static: false }) customerForm!: CustomerFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Customers", url: "/home/customers/all-customers" },
    { text: "View Customer", url: "/home/customers/view-customer" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getCustomer();
  }

  getCustomer(){
    this.customersApi.getSingleCustomer()
      .subscribe(
        res => {
          console.log(res);

          this.customerForm.customerCodeInput.value = res.customer_code;
          this.customerForm.phoneInput.value = res.phone;
          this.customerForm.emailInput.value = res.email;
          this.customerForm.addressTextBox.value = res.address;
          this.customerForm.stateInput.value = res.state;
          this.customerForm.cityInput.value = res.city;
          this.customerForm.postCodeInput.value = res.post_code;
          this.customerForm.allergiesTextBox.value = res.allergies;
          this.customerForm.preferencesTextBox.value = res.preferences;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  saveCustomer(){
    console.log('u are saving a new customer');

    var customerData = {
      account: localStorage.getItem('restaurant_id'),
      customer_code: this.customerForm.customerCodeInput.value,
      phone: this.customerForm.phoneInput.value,
      email: this.customerForm.emailInput.value,
      address: this.customerForm.addressTextBox.value,
      state: this.customerForm.stateInput.value,
      city: this.customerForm.cityInput.value,
      post_code: this.customerForm.postCodeInput.value,
      allergies: this.customerForm.allergiesTextBox.value,
      preferences: this.customerForm.preferencesTextBox.value,
    }

    console.log(customerData);

    this.customersApi.postCustomer(customerData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
