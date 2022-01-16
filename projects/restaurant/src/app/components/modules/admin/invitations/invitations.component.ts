import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { AdminApiService } from 'projects/restaurant/src/app/services/modules/admin-api/admin-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss']
})
export class InvitationsComponent implements OnInit {

  constructor(
    private router: Router,
    private adminApi: AdminApiService,
  ) { }

  @ViewChild('buttonReference', { read: ButtonComponent, static: false }) button!: ButtonComponent;
  @ViewChild('gridReference', { read: GridComponent, static: false }) grid!: GridComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Invitations", url: "/home/admin/invitations" },
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

  getAllInvitations(){
    this.adminApi.getAllInvitations()
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

  viewInvitation(event: any){
    console.log(event.detail.row.data);
    sessionStorage.setItem('restaurant_invitation_id', event.detail.row.data.id);

    this.router.navigateByUrl('/home/admin/view-invitation');
  }

  // ------------------------------------------------------------------------------------------------
  // grid config

  setGridConfig(){
    this.dataSource = new Smart.DataAdapter(
      <DataAdapter>{
        id: 'id',
        dataSource: this.getAllInvitations(),
        dataFields: [
          'id: string',
          'date_sent: data',
          'user: string',
          'invitation_status: string'
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Invitation Date", dataField: "date_sent", width: "25%" },
      { label: "User's Name", dataField: "invitee_name", width: "50%" },
      { label: "Invitation Status", dataField: "invitation_status", width: "25%" },
    ];
  }

}
