import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { CustomersApiService } from 'projects/restaurant/src/app/services/modules/customers-api/customers-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private customersApi: CustomersApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/customers/dashboard" },
  ];

  allCustomersCount: number = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getCustomersCount();
  }

  getCustomersCount(){
    this.customersApi.getCounts("Customer")
      .subscribe(
        res => {
          console.log(res);
          this.allCustomersCount = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
