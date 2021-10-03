import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllNursesPrintComponent } from './all-nurses-print/all-nurses-print.component';
import { ViewNursePrintComponent } from './view-nurse-print/view-nurse-print.component';



@NgModule({
  declarations: [
    AllNursesPrintComponent,
    ViewNursePrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NursesPrintModule { }
