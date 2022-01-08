import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {

  constructor() { }

  transactionForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initTransactionForm();
  }

  initTransactionForm(){
    this.transactionForm = new FormGroup({
      transactionDate: new FormControl(''),
      description: new FormControl(''),
      transactionType: new FormControl(''),
      amount: new FormControl('')
    })
  }

}
