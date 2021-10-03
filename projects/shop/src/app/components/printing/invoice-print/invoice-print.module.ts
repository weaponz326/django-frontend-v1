import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllInvoicePrintComponent } from './all-invoice-print/all-invoice-print.component';
import { ViewInvoicePrintComponent } from './view-invoice-print/view-invoice-print.component';



@NgModule({
  declarations: [
    AllInvoicePrintComponent,
    ViewInvoicePrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InvoicePrintModule { }
