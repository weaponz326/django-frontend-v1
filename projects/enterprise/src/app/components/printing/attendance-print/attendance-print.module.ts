import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllAttendancePrintComponent } from './all-attendance-print/all-attendance-print.component';
import { ViewAttendancePrintComponent } from './view-attendance-print/view-attendance-print.component';



@NgModule({
  declarations: [
    AllAttendancePrintComponent,
    ViewAttendancePrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AttendancePrintModule { }
