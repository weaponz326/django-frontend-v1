import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component';


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

  transactionsGridData: any[] = [];

  ngOnInit(): void {
  }

  openModal(){
    this.getAccounts();
    this.openButton.nativeElement.click();
  }

  getAccounts(){
    this.accountsApi.getAllTransactions(1, 15, "")
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

  selectRow(row: any){
    this.transactionSelected.emit(row);
    this.closeButton.nativeElement.click();
    console.log(row);
  }

}
