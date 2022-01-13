import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';

import { ConnectionToastComponent } from '../../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private accountsApi: AccountsApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  accountData: any;
  transactionsGridData: any[] = [];

  ngOnInit(): void {
    let source_id = sessionStorage.getItem("personal_rink_source_id") as string;
    sessionStorage.setItem("personal_account_id", source_id);

    this.getAccount();
    this.getTransactions();
  }

  getAccount(){
    this.accountsApi.getSingleAccount()
      .subscribe(
        res => {
          console.log(res);
          this.accountData = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getTransactions(){
    this.accountsApi.getTransactions()
      .subscribe(
        res => {
          console.log(res);
          this.transactionsGridData = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
