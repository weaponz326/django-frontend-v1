import { Component, OnInit, ViewChild } from '@angular/core';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';
import { AccountsPrintService } from 'projects/personal/src/app/services/printing/accounts-print/accounts-print.service';


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

  navHeading: any[] = [
    { text: "All Transactions", url: "/home/accounts/all-transactions" },
  ];

  allTransactionsGridData: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAllTransactions();
  }

  getAllTransactions(){
    this.accountsApi.getAllTransactions()
      .subscribe(
        res => {
          console.log(res);
          this.allTransactionsGridData = res;
        },
        err => {
          console.log(err);
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
    this.accountsPrint.printAllTransactions(this.allTransactionsGridData);
  }

}
