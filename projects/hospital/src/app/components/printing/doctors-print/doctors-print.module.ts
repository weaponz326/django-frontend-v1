import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllDoctorsPrintComponent } from './all-doctors-print/all-doctors-print.component';
import { ViewDoctorPrintComponent } from './view-doctor-print/view-doctor-print.component';



@NgModule({
  declarations: [
    AllDoctorsPrintComponent,
    ViewDoctorPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DoctorsPrintModule { }
