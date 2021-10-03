import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllStudentsPrintComponent } from './all-students-print/all-students-print.component';
import { ViewStudentPrintComponent } from './view-student-print/view-student-print.component';



@NgModule({
  declarations: [
    AllStudentsPrintComponent,
    ViewStudentPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentsPrintModule { }
