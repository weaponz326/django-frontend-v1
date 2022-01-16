import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { KitchenStockApiService } from 'projects/restaurant/src/app/services/modules/kitchen-stock-api/kitchen-stock-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private kitchenStockApi: KitchenStockApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/kitchen-stock/dashboard" },
  ];

  allStockItemsCount: number = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getStockItemsCount();
  }

  getStockItemsCount(){
    this.kitchenStockApi.getCounts("Stock Item")
      .subscribe(
        res => {
          console.log(res);
          this.allStockItemsCount = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
