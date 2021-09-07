import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllReservationsComponent } from './all-reservations/all-reservations.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllReservationsComponent,
    NewReservationComponent,
    EditReservationComponent,
    ReservationFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReservationsModule { }
