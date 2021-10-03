import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllVisitorsPrintComponent } from './all-visitors-print/all-visitors-print.component';
import { ViewVisitorPrintComponent } from './view-visitor-print/view-visitor-print.component';



@NgModule({
  declarations: [
    AllVisitorsPrintComponent,
    ViewVisitorPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReceptionPrintModule { }
