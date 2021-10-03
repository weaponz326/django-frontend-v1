import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllReservationsPrintComponent } from './all-reservations-print/all-reservations-print.component';
import { ViewReservationPrintComponent } from './view-reservation-print/view-reservation-print.component';



@NgModule({
  declarations: [
    AllReservationsPrintComponent,
    ViewReservationPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReservationsPrintModule { }
