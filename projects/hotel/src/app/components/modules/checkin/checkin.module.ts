import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

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
    CommonModule,
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class CheckinModule { }
