import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarPageRoutingModule } from './calendar-page-routing.module';
import { CalendarPageComponent } from './calendar-page.component';


@NgModule({
  declarations: [
    CalendarPageComponent
  ],
  imports: [
    CommonModule,
    CalendarPageRoutingModule
  ]
})
export class CalendarPageModule { }
