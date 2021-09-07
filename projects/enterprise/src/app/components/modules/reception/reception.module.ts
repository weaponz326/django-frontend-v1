import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllVisitorsComponent } from './all-visitors/all-visitors.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { EditVisitorComponent } from './edit-visitor/edit-visitor.component';
import { VisitorFormComponent } from './visitor-form/visitor-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllVisitorsComponent,
    AddVisitorComponent,
    EditVisitorComponent,
    VisitorFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReceptionModule { }
