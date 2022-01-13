import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';

import { ViewCalendarPrintComponent } from 'projects/personal/src/app/components/printing/calendar-print/view-calendar-print/view-calendar-print.component'


@Component({
  selector: 'app-view-calendar',
  templateUrl: './view-calendar.component.html',
  styleUrls: ['./view-calendar.component.scss']
})
export class ViewCalendarComponent implements OnInit {

  constructor(private calendarApi: CalendarApiService) { }

  @ViewChild('viewCalendarPrintComponentReference', { read: ViewCalendarPrintComponent, static: false }) viewCalendarPrint!: ViewCalendarPrintComponent;

  navHeading: any[] = [
    { text: "View Calendar", url: "/home/calendar/view-calendar" },
  ];

  calendarForm: FormGroup = new FormGroup({});

  schedulesGridData: any[] = [];
  calendarFormData: any[] = [];

  isCalendarSaving: boolean = false;

  ngOnInit(): void {
    this.initClendarForm();
  }

  ngAfterViewInit(): void {
    this.getSchedules();
    this.getCalendar();
  }

  initClendarForm(){
    this.calendarForm = new FormGroup({
      calendarName: new FormControl('')
    })
  }

  getCalendar(){
    this.calendarApi.getCalendar()
      .subscribe(
        res => {
          console.log(res);
          this.calendarFormData = res;
          this.calendarForm.controls.calendarName.setValue(res.calendar_name);
        },
        err => {
          console.log(err);
        }
      )
  }

  getSchedules(){
    this.calendarApi.getSchedules()
      .subscribe(
        res => {
          console.log(res);
          this.schedulesGridData = res;
        },
        err => {
          console.log(err);
        }
      )
  }

  putCalendar(){
    let data = {
      user: localStorage.getItem('personal_id'),
      calendar_name: this.calendarForm.controls.calendarName.value
    }

    console.log(data);
    this.isCalendarSaving = true;

    this.calendarApi.putCalendar(data)
      .subscribe(
        res => {
          console.log(res);
          this.isCalendarSaving = false;
        },
        err => {
          console.log(err);
          this.isCalendarSaving = false;
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
    this.viewCalendarPrint.print();
  }

}
