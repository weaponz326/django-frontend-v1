import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { AdminApiService } from 'projects/restaurant/src/app/services/modules/admin-api/admin-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'


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

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "Invitations", url: "/home/admin/invitations" },
  ];

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
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  viewInvitation(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('restaurant_invitation_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/home/admin/view-invitation');
  }

  // ------------------------------------------------------------------------------------------------
  // grid config

  setGridConfig(){
    this.grid.dataSource = new Smart.DataAdapter(
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

    this.grid.columns = <GridColumn[]>[
      { label: "Invitation Date", dataField: "date_sent", width: "25%" },
      { label: "User's Name", dataField: "user_name", width: "50%" },
      { label: "Invitation Status", dataField: "invitation_status", width: "25%" },
    ];

    this.grid.paging.enabled = true;
    this.grid.sorting.enabled = true;
    this.grid.filtering.enabled = true;
  }
  
}
