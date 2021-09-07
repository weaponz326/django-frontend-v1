import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetablePageRoutingModule } from './timetable-page-routing.module';
import { TimetablePageComponent } from './timetable-page.component';


@NgModule({
  declarations: [
    TimetablePageComponent
  ],
  imports: [
    CommonModule,
    TimetablePageRoutingModule
  ]
})
export class TimetablePageModule { }
