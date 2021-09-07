import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllSittingsComponent } from './all-sittings/all-sittings.component';
import { NewSittingComponent } from './new-sitting/new-sitting.component';
import { ViewSittingComponent } from './view-sitting/view-sitting.component';
import { SittingFormComponent } from './sitting-form/sitting-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllSittingsComponent,
    NewSittingComponent,
    ViewSittingComponent,
    SittingFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SittingsModule { }
