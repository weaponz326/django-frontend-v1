import { Component, OnInit, ViewChild } from '@angular/core';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';
import { CalendarPrintService } from 'projects/personal/src/app/services/printing/calendar-print/calendar-print.service';


@Component({
  selector: 'app-all-schedules',
  templateUrl: './all-schedules.component.html',
  styleUrls: ['./all-schedules.component.scss']
})
export class AllSchedulesComponent implements OnInit {

  constructor(
    private calendarApi: CalendarApiService,
    private calendarPrint: CalendarPrintService,
  ) { }

  navHeading: any[] = [
    { text: "All Schedules", url: "/home/calendar/all-schedules" },
  ];

  schedulesGridData: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAllSchedules;
  }

  getAllSchedules(){
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

  onPrint(){
    console.log("lets start printing...");
    this.calendarPrint.printAllSchedules(this.schedulesGridData);
  }

}
