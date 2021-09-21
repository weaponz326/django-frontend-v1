import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';

import { PortalApiService } from 'projects/restaurant/src/app/services/modules/portal-api/portal-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'


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
  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "Timeline", url: "/home/portal/timeline" },
  ];

  restaurantId = localStorage.getItem('restaurant_id');
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
          this.connectionPrompt.toast.open();
        }
      )
  }

  viewRink(rinkId: any){
    sessionStorage.setItem('restaurant_rink_id', rinkId);
    this.router.navigateByUrl('/home/portal/view-rink');
  }

}
