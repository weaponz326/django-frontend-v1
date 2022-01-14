import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component';
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'


@Component({
  selector: 'app-select-transaction',
  templateUrl: './select-transaction.component.html',
  styleUrls: ['./select-transaction.component.scss']
})
export class SelectTransactionComponent implements OnInit {

  constructor(private accountsApi: AccountsApiService) { }

  @Output() transactionSelected = new EventEmitter<object>();

  @ViewChild('openButtonElementReference', { read: ElementRef, static: false }) openButton!: ElementRef;
  @ViewChild('closeButtonElementReference', { read: ElementRef, static: false }) closeButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('transactionDateSortingComponentReference', { read: TableSortingComponent, static: false }) transactionDateSorting!: TableSortingComponent;
  @ViewChild('descriptionSortingComponentReference', { read: TableSortingComponent, static: false }) descriptionSorting!: TableSortingComponent;
  @ViewChild('transactionTypeSortingComponentReference', { read: TableSortingComponent, static: false }) transactionTypeSorting!: TableSortingComponent;
  @ViewChild('amountSortingComponentReference', { read: TableSortingComponent, static: false }) amountSorting!: TableSortingComponent;

  transactionsGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;

  ngOnInit(): void {
  }

  openModal(){
    this.getAllTransactions(1, 10, "");
    this.openButton.nativeElement.click();
  }

  getAllTransactions(page: any, size: any, sortField: any){
    this.accountsApi.getAllTransactions(page, size, sortField)
      .subscribe(
        res => {
          console.log(res);
          this.transactionsGridData = res.results;
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
    this.transactionSelected.emit(row);
    this.closeButton.nativeElement.click();
    console.log(row);
  }

  sortTable(field: any){
    console.log(field);
    this.getAllTransactions(1, 10, field);

    if((field == 'transaction_date') || (field == "-transaction_date")){
      this.descriptionSorting.resetSort();
      this.transactionTypeSorting.resetSort();
      this.amountSorting.resetSort();
    }
    else if((field == 'description') || (field == "-description")){
      this.transactionDateSorting.resetSort();
      this.transactionTypeSorting.resetSort();
      this.amountSorting.resetSort();
    }
    else if((field == 'transaction_type') || (field == "-transaction_type")){
      this.transactionDateSorting.resetSort();
      this.descriptionSorting.resetSort();
      this.amountSorting.resetSort();
    }
    else if((field == 'amount') || (field == "-amount")){
      this.transactionDateSorting.resetSort();
      this.descriptionSorting.resetSort();
      this.transactionTypeSorting.resetSort();
    }
  }

}
