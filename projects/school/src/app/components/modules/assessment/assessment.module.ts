import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllAssessmentComponent } from './all-assessment/all-assessment.component';
import { NewAssessmentComponent } from './new-assessment/new-assessment.component';
import { ViewAssessmentComponent } from './view-assessment/view-assessment.component';
import { AssessmentFormComponent } from './assessment-form/assessment-form.component';
import { AssessmentTableComponent } from './assessment-table/assessment-table.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllAssessmentComponent,
    NewAssessmentComponent,
    ViewAssessmentComponent,
    AssessmentFormComponent,
    AssessmentTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AssessmentModule { }
