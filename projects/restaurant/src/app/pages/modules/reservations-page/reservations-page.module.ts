import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsPageRoutingModule } from './reservations-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { ReservationsPageComponent } from './reservations-page.component';


@NgModule({
  declarations: [
    ReservationsPageComponent
  ],
  imports: [
    CommonModule,
    ReservationsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class ReservationsPageModule { }
