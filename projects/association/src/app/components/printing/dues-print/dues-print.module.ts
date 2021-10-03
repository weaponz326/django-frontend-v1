import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllDuesPrintComponent } from './all-dues-print/all-dues-print.component';
import { ViewDuesPrintComponent } from './view-dues-print/view-dues-print.component';
import { AllPaymentsPrintComponent } from './all-payments-print/all-payments-print.component';
import { ViewPaymentPrintComponent } from './view-payment-print/view-payment-print.component';



@NgModule({
  declarations: [
    AllDuesPrintComponent,
    ViewDuesPrintComponent,
    AllPaymentsPrintComponent,
    ViewPaymentPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DuesPrintModule { }
