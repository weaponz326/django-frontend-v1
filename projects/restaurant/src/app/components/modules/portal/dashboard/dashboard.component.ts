import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { PortalApiService } from 'projects/restaurant/src/app/services/modules/portal-api/portal-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private portalApi: PortalApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

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
          this.connectionToast.openToast();
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
          this.connectionToast.openToast();
        }
      )
  }

}
