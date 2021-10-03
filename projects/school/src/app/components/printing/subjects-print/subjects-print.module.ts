import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllSubjectsPrintComponent } from './all-subjects-print/all-subjects-print.component';
import { ViewSubjectPrintComponent } from './view-subject-print/view-subject-print.component';



@NgModule({
  declarations: [
    AllSubjectsPrintComponent,
    ViewSubjectPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubjectsPrintModule { }
