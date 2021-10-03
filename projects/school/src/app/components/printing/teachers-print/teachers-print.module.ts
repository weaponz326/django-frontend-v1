import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTeachersPrintComponent } from './all-teachers-print/all-teachers-print.component';
import { ViewTeacherPrintComponent } from './view-teacher-print/view-teacher-print.component';



@NgModule({
  declarations: [
    AllTeachersPrintComponent,
    ViewTeacherPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeachersPrintModule { }
