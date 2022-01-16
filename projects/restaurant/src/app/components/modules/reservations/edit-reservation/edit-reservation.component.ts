import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { ReservationsApiService } from 'projects/restaurant/src/app/services/modules/reservations-api/reservations-api.service';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.scss']
})
export class EditReservationComponent implements OnInit {

  constructor(
    private router: Router,
    private reservationsApi: ReservationsApiService
  ) { }

  @ViewChild('reservationFormComponentReference', { read: ReservationFormComponent, static: false }) reservationForm!: ReservationFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Reservations", url: "/home/reservations/all-reservations" },
    { text: "View Reservation", url: "/home/reservations/edit-reservation" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getReservation();
  }

  getReservation(){
    this.reservationsApi.getSingleReservation()
      .subscribe(
        res => {
          console.log(res);

          this.reservationForm.reservationCodeInput.value = res.reservation_code;
          this.reservationForm.reservationDateTimePicker.value = res.reservation_date;
          this.reservationForm.numberGuestsNumericTextBox.value = res.number_guests;
          this.reservationForm.numberTablesNumericTextBox.value = res.number_tables;
          this.reservationForm.arrivalDateTimePicker.value = res.arrival_date;
          this.reservationForm.reservationStatusDropDownList.value = res.reservation_status;

          this.reservationForm.selectedCustomerId = res.customer.id;
          this.reservationForm.reservationCodeInput.value = res.customer.customer_code;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
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

    this.reservationsApi.putReservation(reservationData)
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
