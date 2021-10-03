import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPrescriptionsPrintComponent } from './all-prescriptions-print/all-prescriptions-print.component';
import { ViewPrescriptionPrintComponent } from './view-prescription-print/view-prescription-print.component';



@NgModule({
  declarations: [
    AllPrescriptionsPrintComponent,
    ViewPrescriptionPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrescriptionsPrintModule { }
