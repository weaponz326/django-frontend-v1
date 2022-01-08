import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';
import { BudgetPrintService } from 'projects/personal/src/app/services/printing/budget-print/budget-print.service';

import { NewBudgetComponent } from '../new-budget/new-budget.component'


@Component({
  selector: 'app-all-budget',
  templateUrl: './all-budget.component.html',
  styleUrls: ['./all-budget.component.scss']
})
export class AllBudgetComponent implements OnInit {

  constructor(
    private router: Router,
    private budgetApi: BudgetApiService,
    private budgetPrint: BudgetPrintService
  ) { }

  @ViewChild('newBudgetComponentReference', { read: NewBudgetComponent, static: false }) newBudget!: NewBudgetComponent;

  navHeading: any[] = [
    { text: "All Budgets", url: "/home/budget/all-budget" },
  ];

  budgetGridData: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAppointments();
  }

  getAppointments(){
    this.budgetApi.getBudgets()
      .subscribe(
        res => {
          console.log(res);
          this.budgetGridData = res;
        },
        err => {
          console.log(err);
        }
      )
  }

  viewBudget(budgetId: any){
    console.log(budgetId);

    sessionStorage.setItem("personal_budget_id", budgetId);
    this.router.navigateByUrl("/home/budget/view-budget");
  }

  onPrint(){
    console.log("lets start printing...");
    this.budgetPrint.printAllBudget(this.budgetGridData);
  }

}
