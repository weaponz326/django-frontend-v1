import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component';
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'


@Component({
  selector: 'app-select-budget',
  templateUrl: './select-budget.component.html',
  styleUrls: ['./select-budget.component.scss']
})
export class SelectBudgetComponent implements OnInit {

  constructor(private budgetApi: BudgetApiService) { }

  @Output() budgetSelected = new EventEmitter<object>();

  @ViewChild('openButtonElementReference', { read: ElementRef, static: false }) openButton!: ElementRef;
  @ViewChild('closeButtonElementReference', { read: ElementRef, static: false }) closeButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('budgetNameSortingComponentReference', { read: TableSortingComponent, static: false }) budgetNameSorting!: TableSortingComponent;
  @ViewChild('budgetTypeSortingComponentReference', { read: TableSortingComponent, static: false }) budgetTypeSorting!: TableSortingComponent;

  budgetGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;

  ngOnInit(): void {
  }

  openModal(){
    this.getBudgets(1, 10, "");
    this.openButton.nativeElement.click();
  }

  getBudgets(page: any, size: any, sortField: any){
    this.budgetApi.getBudgets(page, size, sortField)
      .subscribe(
        res => {
          console.log(res);
          this.budgetGridData = res.results;
          this.currentPage = res.current_page;
          this.totalPages = res.total_pages;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  selectRow(row: any){
    this.budgetSelected.emit(row);
    this.closeButton.nativeElement.click();
    console.log(row);
  }

  sortTable(field: any){
    console.log(field);
    this.getBudgets(1, 10, field);

    if((field == 'budget_name') || (field == "-budget_name")){
      this.budgetTypeSorting.resetSort();
    }
    else if((field == 'budget_type') || (field == "-budget_type")){
      this.budgetNameSorting.resetSort();
    }
  }

}
