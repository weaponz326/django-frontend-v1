import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCashflowPrintComponent } from './all-cashflow-print/all-cashflow-print.component';
import { ViewCashflowPrintComponent } from './view-cashflow-print/view-cashflow-print.component';



@NgModule({
  declarations: [
    AllCashflowPrintComponent,
    ViewCashflowPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CashflowPrintModule { }
