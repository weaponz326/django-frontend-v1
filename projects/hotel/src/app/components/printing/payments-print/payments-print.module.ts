import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPaymentsPrintComponent } from './all-payments-print/all-payments-print.component';
import { ViewPaymentPrintComponent } from './view-payment-print/view-payment-print.component';



@NgModule({
  declarations: [
    AllPaymentsPrintComponent,
    ViewPaymentPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentsPrintModule { }
