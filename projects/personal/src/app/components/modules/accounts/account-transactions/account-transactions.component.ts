import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';

import { AddTransactionComponent } from '../add-transaction/add-transaction.component'
import { EditTransactionComponent } from '../edit-transaction/edit-transaction.component'
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from '../../../module-utilities/delete-modal/delete-modal.component'


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
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  transactionsGridData: any[] = [];

  deleteId = "";
  deleteIndex = 0;

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
          this.connectionToast.openToast();
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
          this.connectionToast.openToast();
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
          this.connectionToast.openToast();
        }
      )
  }

  deleteTransaction(){
    console.log(this.deleteId);

    this.accountsApi.deleteTransaction(this.deleteId)
      .subscribe(
        res => {
          console.log(res);
          this.transactionsGridData.splice(this.deleteIndex, 1);
          this.calculateBalance();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditTransaction(index: any){
    console.log(index);
    this.editTransaction.openModal(index, this.transactionsGridData[index]);
  }

  confirmDelete(index: any, id: any){
    this.deleteIndex = index;
    this.deleteId = id;

    this.deleteModal.openModal();
  }

}
