import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsPageRoutingModule } from './reservations-page-routing.module';
import { ReservationsPageComponent } from './reservations-page.component';


@NgModule({
  declarations: [
    ReservationsPageComponent
  ],
  imports: [
    CommonModule,
    ReservationsPageRoutingModule
  ]
})
export class ReservationsPageModule { }
