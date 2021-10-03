import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCustomersPrintComponent } from './all-customers-print/all-customers-print.component';
import { ViewCustomerPrintComponent } from './view-customer-print/view-customer-print.component';



@NgModule({
  declarations: [
    AllCustomersPrintComponent,
    ViewCustomerPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomersPrintModule { }
