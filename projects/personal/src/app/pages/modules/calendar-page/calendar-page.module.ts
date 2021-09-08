import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarPageRoutingModule } from './calendar-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from '../../../components/module-utilities/module-utilities.module';
import { CalendarModule } from '../../../components/modules/calendar/calendar.module';

import { CalendarPageComponent } from './calendar-page.component';


@NgModule({
  declarations: [
    CalendarPageComponent
  ],
  imports: [
    CommonModule,
    CalendarPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    CalendarModule,
  ]
})
export class CalendarPageModule { }
