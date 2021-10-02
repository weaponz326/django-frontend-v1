import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { NewRinkComponent } from './new-rink/new-rink.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ViewRinkComponent } from './view-rink/view-rink.component';
import { ParentDetailsComponent } from './rink-details/parent-details/parent-details.component';
import { AssessmentDetailsComponent } from './rink-details/assessment-details/assessment-details.component';
import { SubjectDetailsComponent } from './rink-details/subject-details/subject-details.component';
import { StudentDetailsComponent } from './rink-details/student-details/student-details.component';
import { ReportDetailsComponent } from './rink-details/report-details/report-details.component';
import { TeacherDetailsComponent } from './rink-details/teacher-details/teacher-details.component';
import { StaffDetailsComponent } from './rink-details/staff-details/staff-details.component';
import { FeesDetailsComponent } from './rink-details/fees-details/fees-details.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    SearchViewComponent,
    SearchResultsComponent,
    SearchDetailComponent,
    NewRinkComponent,
    TimelineComponent,
    ViewRinkComponent,
    ParentDetailsComponent,
    AssessmentDetailsComponent,
    SubjectDetailsComponent,
    StudentDetailsComponent,
    ReportDetailsComponent,
    TeacherDetailsComponent,
    StaffDetailsComponent,
    FeesDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ChartsModule,
    ModuleUtilitiesModule,
    ButtonModule,
    InputModule,
    MultilineTextBoxModule,
  ]
})
export class PortalModule { }
