import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllSubjectsComponent } from './all-subjects/all-subjects.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { ViewSubjectComponent } from './view-subject/view-subject.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectTeachersComponent } from './subject-teachers/subject-teachers.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllSubjectsComponent,
    AddSubjectComponent,
    ViewSubjectComponent,
    SubjectFormComponent,
    SubjectTeachersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubjectsModule { }
