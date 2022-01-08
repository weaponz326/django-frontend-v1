import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { TransactionFormComponent } from '../transaction-form/transaction-form.component'


@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {

  constructor() { }

  @Output() saveTransactionEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;
  
  @ViewChild('transactionFormComponentReference', { read: TransactionFormComponent, static: false }) transactionForm!: TransactionFormComponent;

  ngOnInit(): void {
  }

  openModal(){
    this.transactionForm.transactionForm.controls.transactionDate.setValue(new Date().toISOString().slice(0, 16));
    this.transactionForm.transactionForm.controls.transactionType.setValue("Credit");
    this.transactionForm.transactionForm.controls.amount.setValue(0);

    this.buttonElement.nativeElement.click();
  }

  saveTransaction(){
    let data = {
      account: sessionStorage.getItem('personal_account_id'),
      transaction_date: this.transactionForm.transactionForm.controls.transactionDate.value,
      description: this.transactionForm.transactionForm.controls.description.value,
      transaction_type: this.transactionForm.transactionForm.controls.transactionType.value,
      amount: this.transactionForm.transactionForm.controls.amount.value,
    }

    this.saveTransactionEvent.emit(data);
  }

  resetForm(){
    this.transactionForm.transactionForm.controls.transactionDate.setValue('');
    this.transactionForm.transactionForm.controls.description.setValue('');
    this.transactionForm.transactionForm.controls.transactionType.setValue('');
    this.transactionForm.transactionForm.controls.amount.setValue('');
  }

}
