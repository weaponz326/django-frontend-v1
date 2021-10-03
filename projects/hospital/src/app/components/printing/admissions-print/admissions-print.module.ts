import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllAdmissionsPrintComponent } from './all-admissions-print/all-admissions-print.component';
import { ViewAdmissionPrintComponent } from './view-admission-print/view-admission-print.component';



@NgModule({
  declarations: [
    AllAdmissionsPrintComponent,
    ViewAdmissionPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdmissionsPrintModule { }
