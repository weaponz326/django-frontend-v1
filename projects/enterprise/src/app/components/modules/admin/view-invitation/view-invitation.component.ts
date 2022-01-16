import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { environment } from 'projects/enterprise/src/environments/environment';
import { AdminApiService } from 'projects/enterprise/src/app/services/modules/admin-api/admin-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component';



@Component({
  selector: 'app-view-invitation',
  templateUrl: './view-invitation.component.html',
  styleUrls: ['./view-invitation.component.scss']
})
export class ViewInvitationComponent implements OnInit {

  constructor(
    private adminApi: AdminApiService,
  ) { }

  @ViewChild('buttonReference', { read: ButtonComponent, static: false }) button!: ButtonComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  personalUrl = environment.personalUrl;

  navHeading: any[] = [
    { text: "Invitations", url: "/home/admin/invitations" },
    { text: "View Invitation", url: "/home/admin/view-invitation" },
  ];

  invitation: any;

  ngOnInit(): void {
    this.getInvitation();
  }

  getInvitation(){
    this.adminApi.getInvitation()
      .subscribe(
        res => {
          console.log(res);
          this.invitation = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
