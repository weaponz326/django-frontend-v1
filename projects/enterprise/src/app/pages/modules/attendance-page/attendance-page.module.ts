import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendancePageRoutingModule } from './attendance-page-routing.module';
import { AttendancePageComponent } from './attendance-page.component';


@NgModule({
  declarations: [
    AttendancePageComponent
  ],
  imports: [
    CommonModule,
    AttendancePageRoutingModule
  ]
})
export class AttendancePageModule { }
