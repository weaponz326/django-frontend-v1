import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendancePageRoutingModule } from './attendance-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { AttendancePageComponent } from './attendance-page.component';


@NgModule({
  declarations: [
    AttendancePageComponent
  ],
  imports: [
    CommonModule,
    AttendancePageRoutingModule,
    MainNavbarModule,
  ]
})
export class AttendancePageModule { }
