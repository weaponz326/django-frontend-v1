import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllClassesComponent } from './all-classes/all-classes.component';
import { NewClassComponent } from './new-class/new-class.component';
import { ViewClassComponent } from './view-class/view-class.component';
import { ClassFormComponent } from './class-form/class-form.component';
import { ClassStudentsComponent } from './class-students/class-students.component';
import { ClassSubjectsComponent } from './class-subjects/class-subjects.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllClassesComponent,
    NewClassComponent,
    ViewClassComponent,
    ClassFormComponent,
    ClassStudentsComponent,
    ClassSubjectsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClassesModule { }
