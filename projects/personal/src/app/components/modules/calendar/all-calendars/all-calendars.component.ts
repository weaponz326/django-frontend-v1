import { Component, OnInit, ViewChild } from '@angular/core';

import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-all-calendars',
  templateUrl: './all-calendars.component.html',
  styleUrls: ['./all-calendars.component.scss']
})
export class AllCalendarsComponent implements OnInit {

  constructor(private calendarApi: CalendarApiService) { }

  @ViewChild('appointmentsGridReference', { read: GridComponent, static: false }) appointmentsGrid!: GridComponent;
  @ViewChild('newCalendarButtonReference', { read: ButtonComponent, static: false }) newCalendarButton!: ButtonComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "All Calendars", url: "/home/calendar/all-calendars" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];

  ngOnInit(): void {
    this.initGrid();
  }

  getAppointments(){
    this.calendarApi.getSchedules()
      .subscribe(
        res => {
          console.log(res);
          this.dataSource = res;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  initGrid(){
    this.dataSource = new Smart.DataAdapter (
      <DataAdapter>{
        dataSource: this.getAppointments(),
        dataFields:[
          'id: string',
          'calendar_name: string',
          'date_created: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: 'Calendar Name', dataField: 'calendar_name', width: '65%' },
      { label: 'Date Created', dataField: 'date_created', width: '35%' },
    ]
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
