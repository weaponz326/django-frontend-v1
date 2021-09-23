import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { environment } from 'projects/association/src/environments/environment';
import { AdminApiService } from 'projects/association/src/app/services/modules/admin-api/admin-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component';



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

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

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
          this.connectionPrompt.toast.open();
        }
      )
  }

}
