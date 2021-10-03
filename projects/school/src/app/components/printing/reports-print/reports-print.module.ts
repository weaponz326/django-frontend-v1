import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllReportsPrintComponent } from './all-reports-print/all-reports-print.component';
import { ClassReportPrintComponent } from './class-report-print/class-report-print.component';
import { StudentReportPrintComponent } from './student-report-print/student-report-print.component';



@NgModule({
  declarations: [
    AllReportsPrintComponent,
    ClassReportPrintComponent,
    StudentReportPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReportsPrintModule { }
