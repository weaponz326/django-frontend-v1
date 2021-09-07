import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllTeachersComponent } from './all-teachers/all-teachers.component';
import { NewTeacherComponent } from './new-teacher/new-teacher.component';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllTeachersComponent,
    NewTeacherComponent,
    ViewTeacherComponent,
    TeacherFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeachersModule { }
