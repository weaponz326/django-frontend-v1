import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { PortalApiService } from 'projects/restaurant/src/app/services/modules/portal-api/portal-api.service';
import { ConnectionPromptComponent } from 'projects/personal/src/app/components/module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private portalApi: PortalApiService) { }

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/portal/dashboard" },
  ];

  allRinkOutCount: number = 0;
  allRinkInCount: number = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getRinkOutCount();
    this.getRinkInCount();
  }

  getRinkOutCount(){
    this.portalApi.getCounts("Rink Out")
      .subscribe(
        res => {
          console.log(res);
          this.allRinkOutCount = res;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  getRinkInCount(){
    this.portalApi.getCounts("Rink In")
      .subscribe(
        res => {
          console.log(res);
          this.allRinkInCount = res;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

}
