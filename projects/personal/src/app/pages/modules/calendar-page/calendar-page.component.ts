import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss']
})
export class CalendarPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "View Calendar", url: "/home/calendar/view-calendar", icon: "bi bi-book" },
    { text: "All Appointments", url: "/home/calendar/all-appointments", icon: "bi bi-list-ul" }
  ]

  ngOnInit(): void {
  }

}
