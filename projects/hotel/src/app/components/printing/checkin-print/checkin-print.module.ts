import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCheckinPrintComponent } from './all-checkin-print/all-checkin-print.component';
import { ViewCheckinPrintComponent } from './view-checkin-print/view-checkin-print.component';



@NgModule({
  declarations: [
    AllCheckinPrintComponent,
    ViewCheckinPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CheckinPrintModule { }
