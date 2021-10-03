import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllOrdersPrintComponent } from './all-orders-print/all-orders-print.component';
import { ViewOrderPrintComponent } from './view-order-print/view-order-print.component';



@NgModule({
  declarations: [
    AllOrdersPrintComponent,
    ViewOrderPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersPrintModule { }
