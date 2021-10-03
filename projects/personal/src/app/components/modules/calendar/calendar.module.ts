import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { SchedulerModule } from 'smart-webcomponents-angular/scheduler';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { InputModule } from 'smart-webcomponents-angular/input';
import { ButtonModule } from 'smart-webcomponents-angular/button';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';
import { CalendarPrintModule } from '../../printing/calendar-print/calendar-print.module';

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
    ChartsModule,
    SchedulerModule,
    GridModule,
    InputModule,
    ButtonModule,
    ModuleUtilitiesModule,
    CalendarPrintModule,
  ]
})
export class CalendarModule { }
