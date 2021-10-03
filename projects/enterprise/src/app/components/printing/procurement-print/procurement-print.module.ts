import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProcurementPrintComponent } from './all-procurement-print/all-procurement-print.component';
import { ViewProcurementPrintComponent } from './view-procurement-print/view-procurement-print.component';



@NgModule({
  declarations: [
    AllProcurementPrintComponent,
    ViewProcurementPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProcurementPrintModule { }
