import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private accountsApi: AccountsApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/accounts/dashboard" },
  ];

  allAccountsCount: number = 0;
  allTransactionsCount: number = 0;

  transactionsLineChartData: ChartDataSets[] = [{ data: [0], label: 'Transactions' }];
  transactionsLineChartLabels: Label[] = [""]

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAccountsCount();
    this.getTransactionsCount();
    this.getTransactionAnnotation();
  }

  getAccountsCount(){
    this.accountsApi.getCounts("Account")
      .subscribe(
        res => {
          console.log(res);
          this.allAccountsCount = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getTransactionsCount(){
    this.accountsApi.getCounts("Transaction")
      .subscribe(
        res => {
          console.log(res);
          this.allTransactionsCount = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getTransactionAnnotation(){
    this.accountsApi.getAnnotation("Transaction")
      .subscribe(
        res => {
          console.log(res);
          this.setTransactionChartData(res);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setTransactionChartData(data: any){
    this.transactionsLineChartLabels = [];
    for(let x = 0; x < data.length; x++){
      this.transactionsLineChartLabels.push(data[x].date);
    }
    console.log(this.transactionsLineChartLabels);

    let rawData = [];
    for(let x = 0; x < data.length; x++){
      rawData.push(data[x].count);
    }
    console.log(rawData);
    this.transactionsLineChartData = [{ data: rawData, label: 'Transactions' }];
  }

  chartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        beginAtZero: true,
        min: 0,
        ticks: {
          stepSize: 1
        }
      }]
    }
  };

}
