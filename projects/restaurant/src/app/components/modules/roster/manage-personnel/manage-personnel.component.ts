import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-manage-personnel',
  templateUrl: './manage-personnel.component.html',
  styleUrls: ['./manage-personnel.component.scss']
})
export class ManagePersonnelComponent implements OnInit {

  constructor(
    private router: Router,
    private rosterApi: RosterApiService
  ) { }

  @ViewChild('addPersonnelButtonReference', { read: ButtonComponent, static: false }) addPersonnelButton!: ButtonComponent;
  @ViewChild('personnelGridReference', { read: GridComponent, static: false }) personnelGrid!: GridComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

  ngOnInit(): void {
    this.initGrid();
  }

  getPersonnel(){
    this.rosterApi.getPersonnel()
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
        id: 'id',
        dataSource: this.getPersonnel(),
        dataFields:[
          'id: string',
          'staff_code: string',
          'staff_name: string',
          'batch_symbol: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: 'Staff ID', dataField: 'staff_code', width: "30%" },
      { label: 'Staff Name', dataField: 'staff_name', width: "50%" },
      { label: 'Batch', dataField: 'batch_symbol', width: "20%" },
    ]
  }

}
