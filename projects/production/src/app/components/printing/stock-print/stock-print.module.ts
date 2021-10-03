import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllStockPrintComponent } from './all-stock-print/all-stock-print.component';
import { ViewStockPrintComponent } from './view-stock-print/view-stock-print.component';



@NgModule({
  declarations: [
    AllStockPrintComponent,
    ViewStockPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StockPrintModule { }
