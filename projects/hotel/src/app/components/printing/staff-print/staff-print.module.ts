import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllStaffPrintComponent } from './all-staff-print/all-staff-print.component';
import { ViewStaffPrintComponent } from './view-staff-print/view-staff-print.component';



@NgModule({
  declarations: [
    AllStaffPrintComponent,
    ViewStaffPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StaffPrintModule { }
