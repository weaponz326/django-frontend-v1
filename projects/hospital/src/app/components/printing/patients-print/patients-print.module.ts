import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPatientsPrintComponent } from './all-patients-print/all-patients-print.component';
import { ViewPatientPrintComponent } from './view-patient-print/view-patient-print.component';



@NgModule({
  declarations: [
    AllPatientsPrintComponent,
    ViewPatientPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PatientsPrintModule { }
