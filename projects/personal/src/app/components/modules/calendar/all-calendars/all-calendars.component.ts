import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';
import { CalendarPrintService } from 'projects/personal/src/app/services/printing/calendar-print/calendar-print.service';

import { NewCalendarComponent } from '../new-calendar/new-calendar.component'


@Component({
  selector: 'app-all-calendars',
  templateUrl: './all-calendars.component.html',
  styleUrls: ['./all-calendars.component.scss']
})
export class AllCalendarsComponent implements OnInit {

  constructor(
    private router: Router,
    private calendarApi: CalendarApiService,
    private calendarPrint: CalendarPrintService,
  ) { }

  @ViewChild('newCalendarComponentReference', { read: NewCalendarComponent, static: false }) newCalendar!: NewCalendarComponent;

  navHeading: any[] = [
    { text: "All Calendars", url: "/home/calendar/all-calendars" },
  ];

  calendarGridData: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getCalendars();
  }

  getCalendars(){
    this.calendarApi.getCalendars()
      .subscribe(
        res => {
          console.log(res);
          this.calendarGridData = res;
        },
        err => {
          console.log(err);
        }
      )
  }

  viewCalendar(id: any){
    console.log(id);
    sessionStorage.setItem('personal_calendar_id', id);

    this.router.navigateByUrl('/home/calendar/view-calendar')
  }

  onPrint(){
    console.log("lets start printing...");
    this.calendarPrint.printAllCalendars(this.calendarGridData);
  }

}
