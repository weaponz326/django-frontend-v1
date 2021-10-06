import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsPageRoutingModule } from './reservations-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { ReservationsModule } from '../../../components/modules/reservations/reservations.module';

import { ReservationsPageComponent } from './reservations-page.component';


@NgModule({
  declarations: [
    ReservationsPageComponent
  ],
  imports: [
    CommonModule,
    ReservationsPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    ReservationsModule,
  ]
})
export class ReservationsPageModule { }
