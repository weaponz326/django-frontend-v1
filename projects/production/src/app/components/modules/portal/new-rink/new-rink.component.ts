import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { MultilineTextBoxComponent } from 'smart-webcomponents-angular/multilinetextbox';

import { PortalApiService } from 'projects/production/src/app/services/modules/portal-api/portal-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-new-rink',
  templateUrl: './new-rink.component.html',
  styleUrls: ['./new-rink.component.scss']
})
export class NewRinkComponent implements OnInit {

  constructor(
    private router: Router,
    private portalApi: PortalApiService,
  ) { }

  @ViewChild('nameInputReference', { read: InputComponent, static: false }) nameInput!: InputComponent;
  @ViewChild('locationInputReference', { read: InputComponent, static: false }) locationInput!: InputComponent;
  @ViewChild('typeDropDownListReference', { read: InputComponent, static: false }) typeDropDownList!: InputComponent;
  @ViewChild('sourceInputReference', { read: InputComponent, static: false }) sourceInput!: InputComponent;
  @ViewChild('commentTextAreaReference', { read: MultilineTextBoxComponent, static: false }) commentTextArea!: MultilineTextBoxComponent;
  @ViewChild('sendButtonReference', { read: ButtonComponent, static: false }) sendButton!: ButtonComponent;
  @ViewChild('cancelButtonReference', { read: ButtonComponent, static: false }) cancelButton!: ButtonComponent;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Rink", url: "/home/portal/search" },
    { text: "Send Rink", url: "/home/portal/search/new-rink" },
  ];

  typeSource: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getDetail();
  }

  getDetail(){
    this.portalApi.getDetail(String(sessionStorage.getItem('productionSearchUser')))
      .subscribe(
        res => {
          console.log(res);
          this.nameInput.value = res.first_name + " " + res.last_name;
          this.locationInput.value = res.location;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  sendRink(){
    let rinkData = {
      sender: localStorage.getItem('production_id'),
      recipient: sessionStorage.getItem('production_rink_recipient'),
      rink_type: this.typeDropDownList.value,
      // rink_source: this.selectedSourceId,
      comment: this.commentTextArea.value
    }

    console.log(rinkData);
    this.sendButton.disabled = true;

    this.portalApi.postRink(rinkData)
      .subscribe(
        res => {
          console.log(res);
          this.sendButton.disabled = false;

          if (res.message == "OK"){
            sessionStorage.setItem('production_rink_id', res.data.id);
            this.router.navigateByUrl('/home/portal/view-rink');
          }
        },
        err => {
          console.log(err);
          this.sendButton.disabled = false;
          this.connectionToast.openToast();
        }
      )
  }

}
