import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCalendarPrintComponent } from './all-calendar-print/all-calendar-print.component';
import { ViewCalendarPrintComponent } from './view-calendar-print/view-calendar-print.component';
import { AllSchedulesPrintComponent } from './all-schedules-print/all-schedules-print.component';



@NgModule({
  declarations: [
    AllCalendarPrintComponent,
    ViewCalendarPrintComponent,
    AllSchedulesPrintComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AllCalendarPrintComponent,
    ViewCalendarPrintComponent,
    AllSchedulesPrintComponent
  ]
})
export class CalendarPrintModule { }
