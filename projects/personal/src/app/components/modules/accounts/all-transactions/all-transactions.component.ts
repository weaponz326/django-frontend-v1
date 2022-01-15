import { Component, OnInit, ViewChild } from '@angular/core';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';
import { AccountsPrintService } from 'projects/personal/src/app/services/printing/accounts-print/accounts-print.service';

import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.scss']
})
export class AllTransactionsComponent implements OnInit {

  constructor(
    private accountsApi: AccountsApiService,
    private accountsPrint: AccountsPrintService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('transactionDateSortingComponentReference', { read: TableSortingComponent, static: false }) transactionDateSorting!: TableSortingComponent;
  @ViewChild('accountNameSortingComponentReference', { read: TableSortingComponent, static: false }) accountNameSorting!: TableSortingComponent;
  @ViewChild('bankNameSortingComponentReference', { read: TableSortingComponent, static: false }) bankNameSorting!: TableSortingComponent;
  @ViewChild('descriptionSortingComponentReference', { read: TableSortingComponent, static: false }) descriptionSorting!: TableSortingComponent;
  @ViewChild('transactionTypeSortingComponentReference', { read: TableSortingComponent, static: false }) transactionTypeSorting!: TableSortingComponent;
  @ViewChild('amountSortingComponentReference', { read: TableSortingComponent, static: false }) amountSorting!: TableSortingComponent;

  navHeading: any[] = [
    { text: "All Transactions", url: "/home/accounts/all-transactions" },
  ];

  allTransactionsGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;
  totalItems = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAllTransactions(1, 20, "");
  }

  getAllTransactions(page: any, size: any, sortField: any){
    this.accountsApi.getAllTransactions(page, size, sortField)
      .subscribe(
        res => {
          console.log(res);
          this.allTransactionsGridData = res.results;
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

  sortTable(field: any){
    console.log(field);
    this.getAllTransactions(1, 20, field);

    if((field == 'transaction_date') || (field == "-transaction_date")){
      this.accountNameSorting.resetSort();
      this.bankNameSorting.resetSort();
      this.descriptionSorting.resetSort();
      this.transactionTypeSorting.resetSort();
      this.amountSorting.resetSort();
    }
    else if((field == 'account_name') || (field == "-account_name")){
      this.transactionDateSorting.resetSort();
      this.bankNameSorting.resetSort();
      this.descriptionSorting.resetSort();
      this.transactionTypeSorting.resetSort();
      this.amountSorting.resetSort();
    }
    else if((field == 'bank_name') || (field == "-bank_name")){
      this.transactionDateSorting.resetSort();
      this.accountNameSorting.resetSort();
      this.descriptionSorting.resetSort();
      this.transactionTypeSorting.resetSort();
      this.amountSorting.resetSort();
    }
    else if((field == 'description') || (field == "-description")){
      this.transactionDateSorting.resetSort();
      this.accountNameSorting.resetSort();
      this.bankNameSorting.resetSort();
      this.transactionTypeSorting.resetSort();
      this.amountSorting.resetSort();
    }
    else if((field == 'transaction_type') || (field == "-transaction_type")){
      this.transactionDateSorting.resetSort();
      this.accountNameSorting.resetSort();
      this.bankNameSorting.resetSort();
      this.descriptionSorting.resetSort();
      this.amountSorting.resetSort();
    }
    else if((field == 'amount') || (field == "-amount")){
      this.transactionDateSorting.resetSort();
      this.accountNameSorting.resetSort();
      this.bankNameSorting.resetSort();
      this.descriptionSorting.resetSort();
      this.transactionTypeSorting.resetSort();
    }
  }

  onPrint(){
    console.log("lets start printing...");
    this.accountsPrint.getPrintAllTransactions(this.totalItems);
  }

}
