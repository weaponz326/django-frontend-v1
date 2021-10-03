import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBookingsPrintComponent } from './all-bookings-print/all-bookings-print.component';
import { ViewBookingPrintComponent } from './view-booking-print/view-booking-print.component';



@NgModule({
  declarations: [
    AllBookingsPrintComponent,
    ViewBookingPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookingsPrintModule { }
