import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllAppointmentsPrintComponent } from './all-appointments-print/all-appointments-print.component';
import { ViewAppointmentPrintComponent } from './view-appointment-print/view-appointment-print.component';



@NgModule({
  declarations: [
    AllAppointmentsPrintComponent,
    ViewAppointmentPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppointmentsPrintModule { }
