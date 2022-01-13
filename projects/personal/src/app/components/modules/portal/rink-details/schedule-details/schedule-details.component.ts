import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';

import { ConnectionToastComponent } from '../../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.scss']
})
export class ScheduleDetailsComponent implements OnInit {

  constructor(private calendarApi: CalendarApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  scheduleData: any;

  ngOnInit(): void {
    let source_id = sessionStorage.getItem("personal_rink_source_id") as string;

    this.getSchedule(source_id);
  }

  getSchedule(source_id: any){
    this.calendarApi.getSchedule(source_id)
      .subscribe(
        res => {
          console.log(res);
          this.scheduleData = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
