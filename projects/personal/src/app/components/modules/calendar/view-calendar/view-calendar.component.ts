import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { SchedulerComponent, SchedulerViewType } from 'smart-webcomponents-angular/scheduler';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';

import { ViewCalendarPrintComponent } from 'projects/personal/src/app/components/printing/calendar-print/view-calendar-print/view-calendar-print.component'
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-view-calendar',
  templateUrl: './view-calendar.component.html',
  styleUrls: ['./view-calendar.component.scss']
})
export class ViewCalendarComponent implements OnInit {

  constructor(private calendarApi: CalendarApiService) { }

  @ViewChild('schedulerReference', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;
  @ViewChild('calendarNameInputReference', { read: InputComponent, static: false }) calendarNameInput!: InputComponent;

  @ViewChild('viewCalendarPrintComponentReference', { read: ViewCalendarPrintComponent, static: false }) ViewCalendarPrint!: ViewCalendarPrintComponent;
  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "View Calendar", url: "/home/calendar/view-calendar" },
  ];

  view: SchedulerViewType = 'month';
  dataSource: any[] = [];
  firstDayOfWeek: number = 1;
  disableDateMenu: boolean = true;
  currentTimeIndicator: boolean = true;
  scrollButtonsPosition: string = 'far';

  schedulesGridData = [];
  calendarFormData = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getSchedules();
    this.getCalendar();
  }

  getCalendar(){
    // this.calendarApi.getCalendar()
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.dataSource = res;
    //       this.calendarFormData = res;
    //     },
    //     err => {
    //       console.log(err);
    //       this.connectionPrompt.toast.open();
    //     }
    //   )
  }


  getSchedules(){
    this.calendarApi.getSchedules()
      .subscribe(
        res => {
          console.log(res);
          this.dataSource = res;
          this.schedulesGridData = res;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  postSchedule(event: CustomEvent){
    let userData = { user: localStorage.getItem('personal_id') }
    let mergedData = Object.assign(event.detail.item, userData);
    console.log(mergedData);

    this.calendarApi.postSchedule(mergedData)
      .subscribe(
        res => {
          console.log(res);
          this.updateData(event);
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  putSchedule(event: CustomEvent){
    console.log(event);

  }

  deleteSchedule(event: CustomEvent){
    console.log(event);

  }

  updateData(event: CustomEvent) {
    console.log(event);

    const
      item = event.detail.item,
      data = this.dataSource;

    for (let i = 0; i < data.length; i++) {
        const dataItem = data[i];

        if (dataItem.label === item.label && dataItem.class === item.class) {
            event.type === 'itemRemove' ? data.splice(i, 1) : data.splice(i, 1, item);
            return;
        }
    }
  }

  onPrint(){
    console.log("lets start printing...");
    this.ViewCalendarPrint.print();
  }

}
