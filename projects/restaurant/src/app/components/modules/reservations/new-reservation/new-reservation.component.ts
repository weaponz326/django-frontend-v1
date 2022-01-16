import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { ReservationsApiService } from 'projects/restaurant/src/app/services/modules/reservations-api/reservations-api.service';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.scss']
})
export class NewReservationComponent implements OnInit {

  constructor(
    private router: Router,
    private reservationsApi: ReservationsApiService
  ) { }

  @ViewChild('reservationFormComponentReference', { read: ReservationFormComponent, static: false }) reservationForm!: ReservationFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Reservation", url: "/home/reservations/new-reservation" },
  ];

  ngOnInit(): void {
  }

  saveReservation(){
    console.log('u are saving a new reservation');

    var reservationData = {
      account: localStorage.getItem('restaurant_id'),
      customer: this.reservationForm.selectedCustomerId,
      reservation_code: this.reservationForm.reservationCodeInput.value,
      reservation_date: this.reservationForm.reservationDateTimePicker.value,
      customer_name: this.reservationForm.customerNameInput.value,
      number_guests: this.reservationForm.numberGuestsNumericTextBox.value,
      number_tables: this.reservationForm.numberTablesNumericTextBox.value,
      arrival_date: this.reservationForm.arrivalDateTimePicker.value,
      reservation_status: this.reservationForm.reservationStatusDropDownList.value,
    }

    console.log(reservationData);

    this.reservationsApi.postReservation(reservationData)
      .subscribe(
        res => {
          console.log(res);

          sessionStorage.setItem('restaurant_reservation_id', res.id);
          this.router.navigateByUrl('/suite/reservations/view-reservation');
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
