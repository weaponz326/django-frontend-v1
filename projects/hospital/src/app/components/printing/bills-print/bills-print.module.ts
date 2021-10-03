import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBillsPrintComponent } from './all-bills-print/all-bills-print.component';
import { ViewBillPrintComponent } from './view-bill-print/view-bill-print.component';



@NgModule({
  declarations: [
    AllBillsPrintComponent,
    ViewBillPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BillsPrintModule { }
