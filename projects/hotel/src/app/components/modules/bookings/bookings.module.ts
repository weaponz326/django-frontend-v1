import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllBookingsComponent } from './all-bookings/all-bookings.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { BookedRoomsComponent } from './booked-rooms/booked-rooms.component';
import { AddBookedRoomComponent } from './add-booked-room/add-booked-room.component';
import { EditBookedRoomComponent } from './edit-booked-room/edit-booked-room.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllBookingsComponent,
    AddBookingComponent,
    ViewBookingComponent,
    BookedRoomsComponent,
    AddBookedRoomComponent,
    EditBookedRoomComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookingsModule { }
