import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { PaymentsApiService } from 'projects/restaurant/src/app/services/modules/payments-api/payments-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private paymentsApi: PaymentsApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/payments/dashboard" },
  ];

  allPaymentsCount: number = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getPaymentsCount();
  }

  getPaymentsCount(){
    this.paymentsApi.getCounts("Payment")
      .subscribe(
        res => {
          console.log(res);
          this.allPaymentsCount = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
