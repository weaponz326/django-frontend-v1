import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { DeliveriesApiService } from 'projects/restaurant/src/app/services/modules/deliveries-api/deliveries-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private deliveriesApi: DeliveriesApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/deliveries/dashboard" },
  ];

  allDeliveriesCount: number = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getDeliveriesCount();
  }

  getDeliveriesCount(){
    this.deliveriesApi.getCounts("Delivery")
      .subscribe(
        res => {
          console.log(res);
          this.allDeliveriesCount = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
