import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsPageRoutingModule } from './appointments-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { AppointmentsPageComponent } from './appointments-page.component';


@NgModule({
  declarations: [
    AppointmentsPageComponent
  ],
  imports: [
    CommonModule,
    AppointmentsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class AppointmentsPageModule { }
