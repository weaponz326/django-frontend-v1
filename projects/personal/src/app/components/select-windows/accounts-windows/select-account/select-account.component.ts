import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component';
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'


@Component({
  selector: 'app-select-account',
  templateUrl: './select-account.component.html',
  styleUrls: ['./select-account.component.scss']
})
export class SelectAccountComponent implements OnInit {

  constructor(private accountsApi: AccountsApiService) { }

  @Output() accountSelected = new EventEmitter<object>();

  @ViewChild('openButtonElementReference', { read: ElementRef, static: false }) openButton!: ElementRef;
  @ViewChild('closeButtonElementReference', { read: ElementRef, static: false }) closeButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('accountNameSortingComponentReference', { read: TableSortingComponent, static: false }) accountNameSorting!: TableSortingComponent;
  @ViewChild('accountNumberSortingComponentReference', { read: TableSortingComponent, static: false }) accountNumberSorting!: TableSortingComponent;
  @ViewChild('bankNameSortingComponentReference', { read: TableSortingComponent, static: false }) bankNameSorting!: TableSortingComponent;

  accountsGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;

  ngOnInit(): void {
  }

  openModal(){
    this.getAccounts(1, 10, "");
    this.openButton.nativeElement.click();
  }

  getAccounts(page: any, size: any, sortField: any){
    this.accountsApi.getAccounts(page, size, sortField)
      .subscribe(
        res => {
          console.log(res);
          this.accountsGridData = res.results;
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
    this.accountSelected.emit(row);
    this.closeButton.nativeElement.click();
    console.log(row);
  }

  sortTable(field: any){
    console.log(field);
    this.getAccounts(1, 10, field);

    if((field == 'account_name') || (field == "-account_name")){
      this.accountNumberSorting.resetSort();
      this.bankNameSorting.resetSort();
    }
    else if((field == 'account_number') || (field == "-account_number")){
      this.accountNameSorting.resetSort();
      this.bankNameSorting.resetSort();
    }
    else if((field == 'bank_name') || (field == "-bank_name")){
      this.accountNameSorting.resetSort();
      this.accountNumberSorting.resetSort();
    }
  }

}
