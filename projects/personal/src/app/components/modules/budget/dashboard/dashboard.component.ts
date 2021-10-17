import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private budgetApi: BudgetApiService) { }

  @ViewChild('connectionPromptComponentReference') connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/budget/dashboard" },
  ];

  allBudgetCount = 0;
  allIncomeCount = 0;
  allExpenditureCount = 0;

  ngOnInit(): void {
    this.getAllBudgetCount();
    this.getAllIncomeCount();
    this.getAllExpenditureCount();
  }

  getAllBudgetCount(){
    this.budgetApi.getCounts("Budget")
      .subscribe(
        res => {
          console.log(res);
          this.allBudgetCount = res;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  getAllIncomeCount(){
    this.budgetApi.getCounts("Income")
      .subscribe(
        res => {
          console.log(res);
          this.allIncomeCount = res;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  getAllExpenditureCount(){
    this.budgetApi.getCounts("Expenditure")
      .subscribe(
        res => {
          console.log(res);
          this.allExpenditureCount = res;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

}
