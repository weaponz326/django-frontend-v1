import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';
import { AccountsPrintService } from 'projects/personal/src/app/services/printing/accounts-print/accounts-print.service';

import { AddAccountComponent } from '../add-account/add-account.component'


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

  @ViewChild('addAccountComponentReference', { read: AddAccountComponent, static: false }) addAccount!: AddAccountComponent;

  navHeading: any[] = [
    { text: "All Accounts", url: "/home/accounts/all-accounts" },
  ];

  accountsGridData: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAccounts();
  }

  getAccounts(){
    this.accountsApi.getAccounts()
      .subscribe(
        res => {
          console.log(res);
          this.accountsGridData = res;
        },
        err => {
          console.log(err);
        }
      )
  }

  viewAccount(accountId: any){
    console.log(accountId);

    sessionStorage.setItem("personal_account_id", accountId);
    this.router.navigateByUrl("/home/accounts/view-account");
  }

  onPrint(){
    console.log("lets start printing...");
    this.accountsPrint.printAllAccounts(this.accountsGridData);
  }

}
