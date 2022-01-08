import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { TransactionFormComponent } from '../transaction-form/transaction-form.component'


@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.scss']
})
export class EditTransactionComponent implements OnInit {

  constructor() { }

  @Output() saveTransactionEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;
  
  @ViewChild('transactionFormComponentReference', { read: TransactionFormComponent, static: false }) transactionForm!: TransactionFormComponent;

  selectedIndex: any = 0;
  selectedId: any = "";

  ngOnInit(): void {
  }

  openModal(index: any, data: any){
    this.selectedIndex = index;
    this.selectedId = data.id;

    this.transactionForm.transactionForm.controls.transactionDate.setValue(new Date(data.transaction_date).toISOString().slice(0, 16));
    this.transactionForm.transactionForm.controls.description.setValue(data.description);
    this.transactionForm.transactionForm.controls.transactionType.setValue(data.transaction_type);
    this.transactionForm.transactionForm.controls.amount.setValue(data.amount);

    this.buttonElement.nativeElement.click();
  }

  saveTransaction(){
    let data = {
      index: this.selectedIndex,
      id: this.selectedId,
      account: sessionStorage.getItem('personal_account_id'),
      transaction_date: this.transactionForm.transactionForm.controls.transactionDate.value,
      description: this.transactionForm.transactionForm.controls.description.value,
      transaction_type: this.transactionForm.transactionForm.controls.transactionType.value,
      amount: this.transactionForm.transactionForm.controls.amount.value,
    }

    this.saveTransactionEvent.emit(data);
  }

}
