import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { AdminApiService } from 'projects/production/src/app/services/modules/admin-api/admin-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  constructor(
    private router: Router,
    private adminApi: AdminApiService,
  ) { }

  @ViewChild('gridReference', { read: GridComponent, static: false }) grid!: GridComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "All Users", url: "/home/admin/all-users" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setGridConfig();
  }

  getAllUsers() {
    this.adminApi.getAllUsers()
      .subscribe(
        res => {
          console.log(res);
          return res;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  viewUser(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('production_admin_user_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/home/admin/view-user');
  }

  // ------------------------------------------------------------------------------------------------
  // grid config

  setGridConfig(){
    this.grid.dataSource = new Smart.DataAdapter(
      <DataAdapter>{
        id: 'id',
        dataSource: this.getAllUsers(),
        dataFields: [
          'id: string',
          'personal_name: string',
          'user_level: string'
        ]
      }
    );

    this.grid.columns = <GridColumn[]>[
      { label: "User's Name", dataField: "personal_name", width: "60%" },
      { label: "User Level", dataField: "user_level", width: "40%" },
    ];

    this.grid.paging.enabled = true;
    this.grid.sorting.enabled = true;
    this.grid.filtering.enabled = true;
  }

}
