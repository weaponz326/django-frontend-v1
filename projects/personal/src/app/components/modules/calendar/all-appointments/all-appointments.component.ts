import { Component, OnInit, ViewChild } from '@angular/core';

import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'
import { AllAppointmentsPrintComponent } from '../../../printing/calendar-print/all-appointments-print/all-appointments-print.component';


@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.scss']
})
export class AllAppointmentsComponent implements OnInit {

  constructor(private calendarApi: CalendarApiService) { }

  @ViewChild('appointmentsGridReference', { read: GridComponent, static: false }) appointmentsGrid!: GridComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;
  @ViewChild('AllAppointmentsPrintComponent', { read: AllAppointmentsPrintComponent, static: false }) allAppointmentsPrint!: AllAppointmentsPrintComponent;

  navHeading: any[] = [
    { text: "All Appointments", url: "/home/calendar/all-appointments" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];

  ngOnInit(): void {
    this.initGrid();
  }

  getAppointments(){
    this.calendarApi.getAppointments()
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
          'label: string',
          'dateStart: string',
          'dateEnd: string',
          'status: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: 'Appointment', dataField: 'label', width: '40%' },
      { label: 'Start Date', dataField: 'dateStart', width: '22%' },
      { label: 'End Date', dataField: 'dateEnd', width: '22%' },
      { label: 'Status', dataField: 'status', columnGroup: 'order', width: '16%' },
    ]
  }

  onPrint(){
    console.log("lets start printing...");
    // this.allAppointmentsPrint.print();
  }

}
