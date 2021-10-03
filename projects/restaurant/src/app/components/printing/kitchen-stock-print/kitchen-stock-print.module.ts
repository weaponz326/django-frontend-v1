import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllKitchenStockPrintComponent } from './all-kitchen-stock-print/all-kitchen-stock-print.component';
import { ViewKitchenStockPrintComponent } from './view-kitchen-stock-print/view-kitchen-stock-print.component';



@NgModule({
  declarations: [
    AllKitchenStockPrintComponent,
    ViewKitchenStockPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class KitchenStockPrintModule { }
