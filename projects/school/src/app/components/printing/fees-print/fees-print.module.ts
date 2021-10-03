import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllFeesPrintComponent } from './all-fees-print/all-fees-print.component';
import { ViewFeesPrintComponent } from './view-fees-print/view-fees-print.component';
import { AllBillsPrintComponent } from './all-bills-print/all-bills-print.component';
import { StudentBillPrintComponent } from './student-bill-print/student-bill-print.component';



@NgModule({
  declarations: [
    AllFeesPrintComponent,
    ViewFeesPrintComponent,
    AllBillsPrintComponent,
    StudentBillPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeesPrintModule { }
