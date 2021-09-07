import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllLabsComponent } from './all-labs/all-labs.component';
import { NewLabComponent } from './new-lab/new-lab.component';
import { ViewLabComponent } from './view-lab/view-lab.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllLabsComponent,
    NewLabComponent,
    ViewLabComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LaboratoryModule { }
