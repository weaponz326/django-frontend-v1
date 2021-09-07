import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllExecutivesComponent } from './all-executives/all-executives.component';
import { AddExecutiveComponent } from './add-executive/add-executive.component';
import { ViewExecutiveComponent } from './view-executive/view-executive.component';
import { ExecutiveFormComponent } from './executive-form/executive-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllExecutivesComponent,
    AddExecutiveComponent,
    ViewExecutiveComponent,
    ExecutiveFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExecutivesModule { }
