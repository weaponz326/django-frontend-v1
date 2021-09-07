import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsPageRoutingModule } from './bookings-page-routing.module';
import { BookingsPageComponent } from './bookings-page.component';


@NgModule({
  declarations: [
    BookingsPageComponent
  ],
  imports: [
    CommonModule,
    BookingsPageRoutingModule
  ]
})
export class BookingsPageModule { }
