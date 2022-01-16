import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { PaymentsApiService } from 'projects/restaurant/src/app/services/modules/payments-api/payments-api.service';
import { PaymentFormComponent } from '../payment-form/payment-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.scss']
})
export class ViewPaymentComponent implements OnInit {

  constructor(
    private router: Router,
    private paymentsApi: PaymentsApiService
  ) { }

  @ViewChild('paymentFormComponentReference', { read: PaymentFormComponent, static: false }) paymentForm!: PaymentFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Payment", url: "/home/payments/new-payment" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getPayment();
  }

  getPayment(){
    this.paymentsApi.getSinglePayment()
      .subscribe(
        res => {
          console.log(res);

          this.paymentForm.paymentCodeInput.value = res.payment_code;
          this.paymentForm.paymentDateTimePicker.value = res.payment_date;
          this.paymentForm.amountPaidNumericTextBox.value = res.amount_paid;

          this.paymentForm.selectedOrderId = res.order.id;
          this.paymentForm.paymentCodeInput.value = res.order.order_code;
          this.paymentForm.totalAmountNumericTextBox.value = res.order.total_amount;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  savePayment(){
    console.log('u are saving a new payment');

    var paymentData = {
      account: localStorage.getItem('restaurant_id'),
      payment_code: this.paymentForm.paymentCodeInput.value,
      payment_date: this.paymentForm.paymentDateTimePicker.value,
      order: this.paymentForm.selectedOrderId,
      amount_paid: this.paymentForm.amountPaidNumericTextBox.value,
    }

    console.log(paymentData);

    this.paymentsApi.putPayment(paymentData)
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
