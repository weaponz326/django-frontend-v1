import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsPageRoutingModule } from './bookings-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { BookingsPageComponent } from './bookings-page.component';


@NgModule({
  declarations: [
    BookingsPageComponent
  ],
  imports: [
    CommonModule,
    BookingsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class BookingsPageModule { }
