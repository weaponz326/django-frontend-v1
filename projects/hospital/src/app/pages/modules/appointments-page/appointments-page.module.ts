import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsPageRoutingModule } from './appointments-page-routing.module';
import { AppointmentsPageComponent } from './appointments-page.component';


@NgModule({
  declarations: [
    AppointmentsPageComponent
  ],
  imports: [
    CommonModule,
    AppointmentsPageRoutingModule
  ]
})
export class AppointmentsPageModule { }
