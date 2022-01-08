import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss']
})
export class CalendarPageComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Calendars", url: "/home/calendar/all-calendars", icon: "bi bi-list-ul" },
    { text: "All Schedules", url: "/home/calendar/all-schedules", icon: "bi bi-list-ul" }
  ]

  ngOnInit(): void {
  }

}
