import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';
import { ViewCalendarComponent } from './view-calendar/view-calendar.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllAppointmentsComponent,
    ViewCalendarComponent
  ],
  imports: [
    CommonModule,
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class CalendarModule { }
