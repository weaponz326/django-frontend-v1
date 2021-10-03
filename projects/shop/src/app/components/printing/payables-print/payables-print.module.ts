import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPayablesPrintComponent } from './all-payables-print/all-payables-print.component';
import { ViewPayablePrintComponent } from './view-payable-print/view-payable-print.component';



@NgModule({
  declarations: [
    AllPayablesPrintComponent,
    ViewPayablePrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PayablesPrintModule { }
