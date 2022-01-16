import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { CustomersApiService } from 'projects/restaurant/src/app/services/modules/customers-api/customers-api.service';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  constructor(
    private router: Router,
    private customersApi: CustomersApiService
  ) { }

  @ViewChild('customerFormComponentReference', { read: CustomerFormComponent, static: false }) customerForm!: CustomerFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Customer", url: "/home/customers/new-customer" },
  ];

  ngOnInit(): void {
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

          sessionStorage.setItem('restaurant_customer_id', res.id);
          this.router.navigateByUrl('/suite/customers/view-customer');
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
