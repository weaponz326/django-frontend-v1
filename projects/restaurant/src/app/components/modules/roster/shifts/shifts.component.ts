import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss']
})
export class ShiftsComponent implements OnInit {

  constructor(
    private router: Router,
    private rosterApi: RosterApiService
  ) { }

  @ViewChild('addShiftButtonReference', { read: ButtonComponent, static: false }) addShiftButton!: ButtonComponent;
  @ViewChild('shiftsGridReference', { read: GridComponent, static: false }) shiftsGrid!: GridComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

  ngOnInit(): void {
    this.initGrid();
  }

  getShifts(){
    this.rosterApi.getShifts()
      .subscribe(
        res => {
          console.log(res);
          this.dataSource = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  initGrid(){
    this.dataSource = new Smart.DataAdapter (
      <DataAdapter>{
        id: 'id',
        dataSource: this.getShifts(),
        dataFields:[
          'id: string',
          'shift_name: string',
          'start_time: string',
          'end_time: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: 'Shift Name', dataField: 'shift_name', width: "50%" },
      { label: 'Start Time', dataField: 'start_time', width: "25%" },
      { label: 'End Time', dataField: 'end_time', width: "25%" },
    ]
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
