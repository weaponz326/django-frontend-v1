import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllAppraisalPrintComponent } from './all-appraisal-print/all-appraisal-print.component';
import { ViewAppraisalPrintComponent } from './view-appraisal-print/view-appraisal-print.component';



@NgModule({
  declarations: [
    AllAppraisalPrintComponent,
    ViewAppraisalPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppraisalPrintModule { }
