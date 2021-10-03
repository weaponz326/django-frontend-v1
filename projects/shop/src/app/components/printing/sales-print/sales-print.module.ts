import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllSalesPrintComponent } from './all-sales-print/all-sales-print.component';
import { ViewSalesPrintComponent } from './view-sales-print/view-sales-print.component';



@NgModule({
  declarations: [
    AllSalesPrintComponent,
    ViewSalesPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SalesPrintModule { }
