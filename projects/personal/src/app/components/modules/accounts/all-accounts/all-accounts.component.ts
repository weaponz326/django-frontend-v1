import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';
import { AccountsPrintService } from 'projects/personal/src/app/services/printing/accounts-print/accounts-print.service';

import { AddAccountComponent } from '../add-account/add-account.component'
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.scss']
})
export class AllAccountsComponent implements OnInit {

  constructor(
    private router: Router,
    private accountsApi: AccountsApiService,
    private accountsPrint: AccountsPrintService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('addAccountComponentReference', { read: AddAccountComponent, static: false }) addAccount!: AddAccountComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('accountNameSortingComponentReference', { read: TableSortingComponent, static: false }) accountNameSorting!: TableSortingComponent;
  @ViewChild('accountNumberSortingComponentReference', { read: TableSortingComponent, static: false }) accountNumberSorting!: TableSortingComponent;
  @ViewChild('bankNameSortingComponentReference', { read: TableSortingComponent, static: false }) bankNameSorting!: TableSortingComponent;

  navHeading: any[] = [
    { text: "All Accounts", url: "/home/accounts/all-accounts" },
  ];

  accountsGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;
  totalItems = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAccounts(1, 20, "");
  }

  getAccounts(page: any, size: any, sortField: any){
    this.accountsApi.getAccounts(page, size, sortField)
      .subscribe(
        res => {
          console.log(res);
          this.accountsGridData = res.results;
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

  viewAccount(accountId: any){
    console.log(accountId);

    sessionStorage.setItem("personal_account_id", accountId);
    this.router.navigateByUrl("/home/accounts/view-account");
  }

  sortTable(field: any){
    console.log(field);
    this.getAccounts(1, 20, field);

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

  onPrint(){
    console.log("lets start printing...");
    this.accountsPrint.getPrintAccounts(this.totalItems);
  }

}
