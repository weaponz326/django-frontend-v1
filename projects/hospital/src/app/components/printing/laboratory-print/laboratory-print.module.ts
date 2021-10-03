import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllLabsPrintComponent } from './all-labs-print/all-labs-print.component';
import { ViewLabPrintComponent } from './view-lab-print/view-lab-print.component';



@NgModule({
  declarations: [
    AllLabsPrintComponent,
    ViewLabPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LaboratoryPrintModule { }
