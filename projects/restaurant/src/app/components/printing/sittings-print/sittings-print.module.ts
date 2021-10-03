import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllSittingsPrintComponent } from './all-sittings-print/all-sittings-print.component';
import { ViewSittingPrintComponent } from './view-sitting-print/view-sitting-print.component';



@NgModule({
  declarations: [
    AllSittingsPrintComponent,
    ViewSittingPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SittingsPrintModule { }
