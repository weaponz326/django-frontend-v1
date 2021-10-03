import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllAssessmentPrintComponent } from './all-assessment-print/all-assessment-print.component';
import { ClassAssessmentPrintComponent } from './class-assessment-print/class-assessment-print.component';
import { StudentAssessmentPrintComponent } from './student-assessment-print/student-assessment-print.component';



@NgModule({
  declarations: [
    AllAssessmentPrintComponent,
    ClassAssessmentPrintComponent,
    StudentAssessmentPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AssessmentPrintModule { }
