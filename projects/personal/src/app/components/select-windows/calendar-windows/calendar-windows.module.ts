import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';

import { SelectCalendarComponent } from './select-calendar/select-calendar.component';
import { SelectScheduleComponent } from './select-schedule/select-schedule.component';


@NgModule({
  declarations: [
    SelectCalendarComponent,
    SelectScheduleComponent
  ],
  imports: [
    CommonModule,
    ModuleUtilitiesModule,
  ],
  exports: [
    SelectCalendarComponent,
    SelectScheduleComponent
  ]
})
export class CalendarWindowsModule { }
