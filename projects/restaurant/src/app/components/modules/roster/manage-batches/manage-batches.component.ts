import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { InputComponent } from 'smart-webcomponents-angular/input';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { ManagePersonnelComponent } from '../manage-personnel/manage-personnel.component';


@Component({
  selector: 'app-manage-batches',
  templateUrl: './manage-batches.component.html',
  styleUrls: ['./manage-batches.component.scss']
})
export class ManageBatchesComponent implements OnInit {

  constructor(
    private router: Router,
    private rosterApi: RosterApiService
  ) { }

  @ViewChild('rosterCodeInputReference', { read: InputComponent, static: false }) rosterCodeInput!: InputComponent;
  @ViewChild('rosterNameInputReference', { read: InputComponent, static: false }) rosterNameInput!: InputComponent;

  @ViewChild('addBatchButtonReference', { read: ButtonComponent, static: false }) addBatchGroupButton!: ButtonComponent;
  @ViewChild('batchesGridReference', { read: GridComponent, static: false }) batchesGrid!: GridComponent;

  @ViewChild('managePersonnelComponentReference', { read: ManagePersonnelComponent, static: false }) managePersonnel!: ManagePersonnelComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Roster", url: "/home/roster/all-roster" },
    { text: "View Roster", url: "/home/roster/view-roster" },
    { text: "Manage Batches", url: "/home/roster/manage-batches" },
  ];

  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

  ngOnInit(): void {
    this.initGrid();
  }

  ngAfterViewInit(): void {
    this.getSingleRoster();
  }

  getSingleRoster(){
    this.rosterApi.getSingleRoster()
      .subscribe(
        res => {
          console.log(res);

          this.rosterCodeInput.value = res.roster_code;
          this.rosterNameInput.value = res.roster_name;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  // --------------------------------------------------------------------------------------
  // grid

  getBatchs(){
    this.rosterApi.getBatches()
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
        dataSource: this.getBatchs(),
        dataFields:[
          'id: string',
          'batch_name: string',
          'batch_symbol: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: 'Batch Name', dataField: 'batch_name', width: "70%" },
      { label: 'Batch Symbol', dataField: 'batch_symbol', width: "30%" },
    ]
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
