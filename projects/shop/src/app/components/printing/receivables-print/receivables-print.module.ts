import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllReceivablesPrintComponent } from './all-receivables-print/all-receivables-print.component';
import { ViewReceivablePrintComponent } from './view-receivable-print/view-receivable-print.component';



@NgModule({
  declarations: [
    AllReceivablesPrintComponent,
    ViewReceivablePrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReceivablesPrintModule { }
