import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';

import { AddTransactionComponent } from '../add-transaction/add-transaction.component'
import { EditTransactionComponent } from '../edit-transaction/edit-transaction.component'


@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.scss']
})
export class AccountTransactionsComponent implements OnInit {

  constructor(private accountsApi: AccountsApiService) { }

  @Output() balanceEvent = new EventEmitter<any>();

  @ViewChild('addTransactionComponentReference', { read: AddTransactionComponent, static: false }) addTransaction!: AddTransactionComponent;
  @ViewChild('editTransactionComponentReference', { read: EditTransactionComponent, static: false }) editTransaction!: EditTransactionComponent;

  transactionsGridData: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getTransactions();
  }

  calculateBalance(){
    let balance = this.transactionsGridData.reduce((total, transaction) => {
      (transaction.transaction_type == "Credit") ? 
        total + transaction.amount : total - transaction.amount;
    });

    this.balanceEvent.emit(balance);
    console.log(balance);
  }

  getTransactions(){
    this.accountsApi.getTransactions()
      .subscribe(
        res => {
          console.log(res);
          this.transactionsGridData = res;
          this.calculateBalance();
        },
        err => {
          console.log(err);
        }
      )
  }

  postTransaction(data: any){
    console.log(data);

    this.accountsApi.postTransaction(data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.transactionsGridData.push(res);
            this.calculateBalance();
            this.addTransaction.resetForm();
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  putTransaction(data: any){
    console.log(data);

    this.accountsApi.putTransaction(data.id, data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.transactionsGridData[data.index] = res;
            this.calculateBalance();
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  deleteTransaction(index: any, id: any){
    console.log(id);

    this.accountsApi.deleteTransaction(id)
      .subscribe(
        res => {
          console.log(res);
          this.transactionsGridData.splice(index, 1);
          this.calculateBalance();
        },
        err => {
          console.log(err);
        }
      )
  }

  openEditTransaction(index: any){
    console.log(index);
    this.editTransaction.openModal(index, this.transactionsGridData[index]);
  }

}
