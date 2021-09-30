import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { WindowComponent } from 'smart-webcomponents-angular/window';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component';


@Component({
  selector: 'app-select-appointment',
  templateUrl: './select-appointment.component.html',
  styleUrls: ['./select-appointment.component.scss']
})
export class SelectAppointmentComponent implements OnInit {

  constructor(private calendarApi: CalendarApiService) { }

  @Output() appointmentSelected = new EventEmitter<object>();

  @ViewChild('window', { read: WindowComponent, static: false }) window!: WindowComponent;
  @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

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

  selectRow(event: any){
    this.appointmentSelected.emit(event.detail.row.data);
    this.window.close();
    console.log(event);
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

}
