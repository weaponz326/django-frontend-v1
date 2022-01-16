import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { StaffApiService } from 'projects/restaurant/src/app/services/modules/staff-api/staff-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private staffApi: StaffApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/staff/dashboard" },
  ];

  allStaffCount: number = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getStaffCount();
  }

  getStaffCount(){
    this.staffApi.getCounts("Staff")
      .subscribe(
        res => {
          console.log(res);
          this.allStaffCount = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }


}
