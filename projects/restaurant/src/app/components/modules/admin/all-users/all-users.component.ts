import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { AdminApiService } from 'projects/restaurant/src/app/services/modules/admin-api/admin-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


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

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Users", url: "/home/admin/all-users" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];

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
          this.dataSource = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  viewUser(event: any){
    console.log(event.detail.row.data);
    sessionStorage.setItem('restaurant_admin_user_id', event.detail.row.data.id);

    this.router.navigateByUrl('/home/admin/view-user');
  }

  // ------------------------------------------------------------------------------------------------
  // grid config

  setGridConfig(){
    this.dataSource = new Smart.DataAdapter(
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

    this.columns = <GridColumn[]>[
      { label: "User's Name", dataField: "personal_name", width: "60%" },
      { label: "User Level", dataField: "user_level", width: "40%" },
    ];
  }

}
