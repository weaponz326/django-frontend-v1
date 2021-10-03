import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllYearsPrintComponent } from './all-years-print/all-years-print.component';
import { ViewYearPrintComponent } from './view-year-print/view-year-print.component';



@NgModule({
  declarations: [
    AllYearsPrintComponent,
    ViewYearPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class YearPrintModule { }
