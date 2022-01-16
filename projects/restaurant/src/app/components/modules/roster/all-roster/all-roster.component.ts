import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-all-roster',
  templateUrl: './all-roster.component.html',
  styleUrls: ['./all-roster.component.scss']
})
export class AllRosterComponent implements OnInit {

  constructor(
    private router: Router,
    private rosterApi: RosterApiService
  ) { }

  @ViewChild('newRosterButtonReference', { read: ButtonComponent, static: false }) newRosterGroupButton!: ButtonComponent;
  @ViewChild('rosterGridReference', { read: GridComponent, static: false }) rosterGrid!: GridComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Roster", url: "/home/roster/all-roster" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

  ngOnInit(): void {
    this.initGrid();
  }

  getRoster(){
    this.rosterApi.getRoster()
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

  viewRoster(event: any){
    console.log(event.detail.row.data.id);
    sessionStorage.setItem('restaurant_roster_id', event.detail.row.data.id);

    this.router.navigateByUrl('/home/roster/view-roster');
  }

  initGrid(){
    this.dataSource = new Smart.DataAdapter (
      <DataAdapter>{
        id: 'id',
        dataSource: this.getRoster(),
        dataFields:[
          'id: string',
          'roster_code: string',
          'roster_name: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Roster ID", dataField: "roster_code", width: "30%" },
      { label: "Roster Name", dataField: "roster_name", width: "70%" },
    ]
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
