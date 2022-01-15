import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';
import { BudgetPrintService } from 'projects/personal/src/app/services/printing/budget-print/budget-print.service';

import { NewBudgetComponent } from '../new-budget/new-budget.component'
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'


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
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('budgetNameSortingComponentReference', { read: TableSortingComponent, static: false }) budgetNameSorting!: TableSortingComponent;
  @ViewChild('budgetTypeSortingComponentReference', { read: TableSortingComponent, static: false }) budgetTypeSorting!: TableSortingComponent;

  navHeading: any[] = [
    { text: "All Budgets", url: "/home/budget/all-budget" },
  ];

  budgetGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;
  totalItems = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getBudgets(1, 20, "");
  }

  getBudgets(page: any, size: any, sortField: any){
    this.budgetApi.getBudgets(page, size, sortField)
      .subscribe(
        res => {
          console.log(res);
          this.budgetGridData = res.results;
          this.currentPage = res.current_page;
          this.totalPages = res.total_pages;
          this.totalItems = res.count;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  viewBudget(budgetId: any){
    console.log(budgetId);

    sessionStorage.setItem("personal_budget_id", budgetId);
    this.router.navigateByUrl("/home/budget/view-budget");
  }

  sortTable(field: any){
    console.log(field);
    this.getBudgets(1, 20, field);

    if((field == 'budget_name') || (field == "-budget_name")){
      this.budgetTypeSorting.resetSort();
    }
    else if((field == 'budget_type') || (field == "-budget_type")){
      this.budgetNameSorting.resetSort();
    }
  }

  onPrint(){
    console.log("lets start printing...");
    this.budgetPrint.getPrintBudgets(this.totalItems);
  }

}
