import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { SchedulerModule } from 'smart-webcomponents-angular/scheduler';
import { GridModule } from 'smart-webcomponents-angular/grid';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';
import { CalendarPrintModule } from '../../printing/calendar-print/calendar-print.module';

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
    RouterModule,
    ChartsModule,
    SchedulerModule,
    GridModule,
    ModuleUtilitiesModule,
    CalendarPrintModule,
  ]
})
export class CalendarModule { }
