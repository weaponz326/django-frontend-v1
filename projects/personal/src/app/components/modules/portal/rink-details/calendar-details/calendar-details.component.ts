import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';

import { ConnectionToastComponent } from '../../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-calendar-details',
  templateUrl: './calendar-details.component.html',
  styleUrls: ['./calendar-details.component.scss']
})
export class CalendarDetailsComponent implements OnInit {

  constructor(private calendarApi: CalendarApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  schedulesGridData: any[] = [];
  calendarData: any;

  ngOnInit(): void {
    let source_id = sessionStorage.getItem("personal_rink_source_id") as string;
    sessionStorage.setItem("personal_calendar_id", source_id);

    this.getSchedules();
    this.getCalendar();
  }

  getCalendar(){
    this.calendarApi.getCalendar()
      .subscribe(
        res => {
          console.log(res);
          this.calendarData = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
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
          this.connectionToast.openToast();
        }
      )
  }

}
