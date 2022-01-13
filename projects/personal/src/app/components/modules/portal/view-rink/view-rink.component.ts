import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PortalApiService } from 'projects/personal/src/app/services/modules/portal-api/portal-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-view-rink',
  templateUrl: './view-rink.component.html',
  styleUrls: ['./view-rink.component.scss']
})
export class ViewRinkComponent implements OnInit {

  constructor(
    private router: Router,
    private portalApi: PortalApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Timeline", url: "/home/portal/timeline" },
    { text: "View Rink", url: "/home/portal/view-rink" },
  ];

  personalId = localStorage.getItem('personal_id');
  rink: any;

  ngOnInit(): void {
    this.getRink();
  }

  getRink(){
    this.portalApi.getSingleRink(sessionStorage.getItem('personal_rink_id'))
      .subscribe(
        res => {
          console.log(res);
          this.rink = res;
          sessionStorage.setItem('personal_rink_source_id', res.rink_source);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
