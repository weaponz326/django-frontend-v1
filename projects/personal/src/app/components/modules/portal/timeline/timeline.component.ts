import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { PortalApiService } from 'projects/personal/src/app/services/modules/portal-api/portal-api.service';
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor(
    private router: Router,
    private portalApi: PortalApiService,
  ) { }

  @ViewChild('buttonReference', { read: ButtonComponent, static: false }) button!: ButtonComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Timeline", url: "/home/portal/timeline" },
  ];

  personalId = localStorage.getItem('personal_id');
  rinks: any;

  ngOnInit(): void {
    this.getRinks();
  }

  getRinks(){
    this.portalApi.getRinks()
      .subscribe(
        res => {
          console.log(res);
          this.rinks = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  viewRink(rinkId: any){
    sessionStorage.setItem('personal_rink_id', rinkId);
    this.router.navigateByUrl('/home/portal/view-rink');
  }

}
