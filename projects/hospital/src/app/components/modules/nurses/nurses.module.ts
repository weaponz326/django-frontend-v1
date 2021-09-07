import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllNursesComponent } from './all-nurses/all-nurses.component';
import { NewNurseComponent } from './new-nurse/new-nurse.component';
import { ViewNurseComponent } from './view-nurse/view-nurse.component';
import { NurseFormComponent } from './nurse-form/nurse-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllNursesComponent,
    NewNurseComponent,
    ViewNurseComponent,
    NurseFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NursesModule { }
