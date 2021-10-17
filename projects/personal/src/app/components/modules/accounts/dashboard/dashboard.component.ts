import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private accountsApi: AccountsApiService) { }

  @ViewChild('connectionPromptComponentReference') connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/accounts/dashboard" },
  ];

  allAccountsCount: number = 0;
  allTransactionsCount: number = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAccountsCount();
    this.getTransactionsCount();
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
          this.connectionPrompt.toast.open();
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
          this.connectionPrompt.toast.open();
        }
      )
  }

}
