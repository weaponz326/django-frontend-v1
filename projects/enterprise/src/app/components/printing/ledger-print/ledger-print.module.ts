import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllLedgerPrintComponent } from './all-ledger-print/all-ledger-print.component';
import { ViewLedgerPrintComponent } from './view-ledger-print/view-ledger-print.component';



@NgModule({
  declarations: [
    AllLedgerPrintComponent,
    ViewLedgerPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LedgerPrintModule { }
