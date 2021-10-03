import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllDiagnosisPrintComponent } from './all-diagnosis-print/all-diagnosis-print.component';
import { ViewDiagnosisPrintComponent } from './view-diagnosis-print/view-diagnosis-print.component';



@NgModule({
  declarations: [
    AllDiagnosisPrintComponent,
    ViewDiagnosisPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DiagnosisPrintModule { }
