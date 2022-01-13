import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';

import { ConnectionToastComponent } from '../../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-budget-details',
  templateUrl: './budget-details.component.html',
  styleUrls: ['./budget-details.component.scss']
})
export class BudgetDetailsComponent implements OnInit {

  constructor(private budgetApi: BudgetApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  budgetData: any;
  incomeGridData: any[] = [];
  expenditureGridData: any[] = [];

  totalIncome = 0;
  totalExpenditure = 0;
  ioe = 0;

  ngOnInit(): void {
    let source_id = sessionStorage.getItem("personal_rink_source_id") as string;
    sessionStorage.setItem("personal_budget_id", source_id);

    this.getBudget();
    this.getIncome();
    this.getExpenditure();
  }

  calculateIoe(){
    this.totalIncome = this.incomeGridData.reduce((total, {amount}) => total + Number(amount), 0);
    this.totalExpenditure = this.expenditureGridData.reduce((total, {amount}) => total + Number(amount), 0);
    this.ioe = this.totalIncome - this.totalExpenditure;

    console.log(this.ioe);
  }

  getBudget(){
    this.budgetApi.getSingleBudget()
      .subscribe(
        res => {
          console.log(res);
          this.budgetData = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getIncome(){
    this.budgetApi.getIncome()
      .subscribe(
        res => {
          console.log(res);
          this.incomeGridData = res;
          this.calculateIoe();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getExpenditure(){
    this.budgetApi.getExpenditure()
      .subscribe(
        res => {
          console.log(res);
          this.expenditureGridData = res;
          this.calculateIoe();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
