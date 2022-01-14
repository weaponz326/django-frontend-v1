import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ViewCalendarComponent } from './view-calendar/view-calendar.component';
import { AllCalendarsComponent } from './all-calendars/all-calendars.component';
import { NewCalendarComponent } from './new-calendar/new-calendar.component';
import { AllSchedulesComponent } from './all-schedules/all-schedules.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    ViewCalendarComponent,
    AllCalendarsComponent,
    NewCalendarComponent,
    AllSchedulesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class CalendarModule { }
