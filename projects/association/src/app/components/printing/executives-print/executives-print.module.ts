import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllExecutivesPrintComponent } from './all-executives-print/all-executives-print.component';
import { ViewExecutivePrintComponent } from './view-executive-print/view-executive-print.component';



@NgModule({
  declarations: [
    AllExecutivesPrintComponent,
    ViewExecutivePrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExecutivesPrintModule { }
