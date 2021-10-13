import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations-page',
  templateUrl: './reservations-page.component.html',
  styleUrls: ['./reservations-page.component.scss']
})
export class ReservationsPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Reservations", url: "/home/reservations/all-reservations", icon: "bi bi-list-ul" },
    { text: "New Reservation", url: "/home/reservations/new-reservation", icon: "bi bi-plus-square" },
  ]

  ngOnInit(): void {
  }

}
