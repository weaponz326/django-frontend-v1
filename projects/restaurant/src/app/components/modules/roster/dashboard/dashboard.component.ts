import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private rosterApi: RosterApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/roster/dashboard" },
  ];

  allRosterCount: number = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getRosterCount();
  }

  getRosterCount(){
    this.rosterApi.getCounts("Roster")
      .subscribe(
        res => {
          console.log(res);
          this.allRosterCount = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
