import { Component, OnInit, ViewChild } from '@angular/core';

import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';

import { AllSchedulesPrintComponent } from 'projects/personal/src/app/components/printing/calendar-print/all-schedules-print/all-schedules-print.component'
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-all-schedules',
  templateUrl: './all-schedules.component.html',
  styleUrls: ['./all-schedules.component.scss']
})
export class AllSchedulesComponent implements OnInit {

  constructor(private calendarApi: CalendarApiService) { }

  @ViewChild('schedulesGridReference', { read: GridComponent, static: false }) schedulesGrid!: GridComponent;

  @ViewChild('allSchedulesPrintComponentReference', { read: AllSchedulesPrintComponent, static: false }) allSchedulesPrint!: AllSchedulesPrintComponent;
  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "All Schedules", url: "/home/calendar/all-schedules" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];

  schedulesGridData = [];

  ngOnInit(): void {
    this.initGrid();
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

  initGrid(){
    this.dataSource = new Smart.DataAdapter (
      <DataAdapter>{
        dataSource: this.getSchedules(),
        dataFields:[
          'id: string',
          'label: string',
          'dateStart: string',
          'dateEnd: string',
          'status: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: 'Schedule', dataField: 'label', width: '40%' },
      { label: 'Start Date', dataField: 'dateStart', width: '22%' },
      { label: 'End Date', dataField: 'dateEnd', width: '22%' },
      { label: 'Status', dataField: 'status', columnGroup: 'order', width: '16%' },
    ]
  }

  onPrint(){
    console.log("lets start printing...");
    this.allSchedulesPrint.print();
  }

}
