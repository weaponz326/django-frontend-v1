import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllAccountsPrintComponent } from './all-accounts-print/all-accounts-print.component';
import { ViewAccountPrintComponent } from './view-account-print/view-account-print.component';



@NgModule({
  declarations: [
    AllAccountsPrintComponent,
    ViewAccountPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountsPrintModule { }
