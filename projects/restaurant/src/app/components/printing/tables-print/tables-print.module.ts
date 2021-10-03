import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTablesPrintComponent } from './all-tables-print/all-tables-print.component';
import { ViewTablePrintComponent } from './view-table-print/view-table-print.component';



@NgModule({
  declarations: [
    AllTablesPrintComponent,
    ViewTablePrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TablesPrintModule { }
