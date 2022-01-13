import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';

import { ConnectionToastComponent } from '../../../../module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {

  constructor(private accountsApi: AccountsApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  transactionData: any;

  ngOnInit(): void {
    let source_id = sessionStorage.getItem("personal_rink_source_id") as string;

    this.getTransaction(source_id);
  }

  getTransaction(source_id: any){
    this.accountsApi.getSingleTransaction(source_id)
      .subscribe(
        res => {
          console.log(res);
          this.transactionData = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
