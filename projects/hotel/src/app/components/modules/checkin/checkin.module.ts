import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllCheckinComponent } from './all-checkin/all-checkin.component';
import { NewCheckinComponent } from './new-checkin/new-checkin.component';
import { ViewCheckinComponent } from './view-checkin/view-checkin.component';
import { CheckinFormComponent } from './checkin-form/checkin-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllCheckinComponent,
    NewCheckinComponent,
    ViewCheckinComponent,
    CheckinFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CheckinModule { }
