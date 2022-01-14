import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private calendarApi: CalendarApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/calendar/dashboard" },
  ];

  allCalendarsCount: number = 0;
  allSchedulesCount: number = 0;

  schedulesLineChartData: ChartDataSets[] = [{ data: [0], label: 'Schedules' }];
  schedulesLineChartLabels: Label[] = [""]

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getCalendarsCount();
    this.getSchedulesCount();
    this.getScheduleAnnotation();

    // this.initChart();
  }

  getCalendarsCount(){
    this.calendarApi.getCounts("Calendar")
      .subscribe(
        res => {
          console.log(res);
          this.allCalendarsCount = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getSchedulesCount(){
    this.calendarApi.getCounts("Schedule")
      .subscribe(
        res => {
          console.log(res);
          this.allSchedulesCount = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getScheduleAnnotation(){
    this.calendarApi.getAnnotation("Schedule")
      .subscribe(
        res => {
          console.log(res);
          this.setScheduleChartData(res);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setScheduleChartData(data: any){
    this.schedulesLineChartLabels = [];
    for(let x = 0; x < data.length; x++){
      this.schedulesLineChartLabels.push(data[x].date);
    }
    console.log(this.schedulesLineChartLabels);

    let rawData = [];
    for(let x = 0; x < data.length; x++){
      rawData.push(data[x].count);
    }
    console.log(rawData);
    this.schedulesLineChartData = [{ data: rawData, label: 'Schedules' }];
  }

  // initChart(){
    chartOptions = {
      responsive: true,
      scales: {
        yAxes: [{
          beginAtZero: true,
          min: 0,
          ticks: {
            stepSize: 1
          }
        }]
      }
    };
  // }

}
