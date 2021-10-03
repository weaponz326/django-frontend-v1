import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsPrintComponent } from './all-products-print/all-products-print.component';
import { ViewProductPrintComponent } from './view-product-print/view-product-print.component';



@NgModule({
  declarations: [
    AllProductsPrintComponent,
    ViewProductPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsPrintModule { }
