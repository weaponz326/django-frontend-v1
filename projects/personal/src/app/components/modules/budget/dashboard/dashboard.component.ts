import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private budgetApi: BudgetApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "Dashboard", url: "/home/budget/dashboard" },
  ];

  allBudgetCount = 0;
  allIncomeCount = 0;
  allExpenditureCount = 0;

  incomeGlobalData: any[] = [];
  expenditureGlobalData: any[] = [];
  ieBarChartData: ChartDataSets[] = [{ data: [0], label: 'Income' }, { data: [0], label: 'Expendture' }];
  ieBarChartLabels: Label[] = [""];
  iePieChartLabels: Label[] = ['Income', 'Expenditure'];
  iePieChartData: SingleDataSet = [0, 0];

  ngOnInit(): void {
    this.getAllBudgetCount();
    this.getAllIncomeCount();
    this.getAllExpenditureCount();
    this.getIncomeAnnotation();
    this.getExpenditureAnnotation();
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
          this.connectionToast.openToast();
        }
      )
  }

  getAllIncomeCount(){
    this.budgetApi.getCounts("Income")
      .subscribe(
        res => {
          console.log(res);
          this.allIncomeCount = res;
          this.iePieChartData[0] = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getAllExpenditureCount(){
    this.budgetApi.getCounts("Expenditure")
      .subscribe(
        res => {
          console.log(res);
          this.allExpenditureCount = res;
          this.iePieChartData[1] = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getIncomeAnnotation(){
    this.budgetApi.getAnnotation("Income")
      .subscribe(
        res => {
          console.log(res);
          this.setIEtaskBarChartLabels(res);
          this.setIncomeChartData(res);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getExpenditureAnnotation(){
    this.budgetApi.getAnnotation("Expenditure")
      .subscribe(
        res => {
          console.log(res);
          this.setIEtaskBarChartLabels(res);
          this.setExpenditureChartData(res);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  setIEtaskBarChartLabels(data: any){
    this.ieBarChartLabels = [];
    for(let x = 0; x < data.length; x++){
      this.ieBarChartLabels.push(data[x].date);
    }
    console.log(this.ieBarChartLabels);
  }

  setIncomeChartData(data: any){
    let rawIncomeData = [];
    for(let x = 0; x < data.length; x++){
      rawIncomeData.push(data[x].count);
    }
    console.log(rawIncomeData);
    this.incomeGlobalData = rawIncomeData;
  }

  setExpenditureChartData(data: any){
    let rawExpenditureData = [];
    for(let x = 0; x < data.length; x++){
      rawExpenditureData.push(data[x].count);
    }
    console.log(rawExpenditureData);
    this.expenditureGlobalData = rawExpenditureData;
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
