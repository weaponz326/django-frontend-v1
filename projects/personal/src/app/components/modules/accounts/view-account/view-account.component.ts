import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';
import { AccountsPrintService } from 'projects/personal/src/app/services/printing/accounts-print/accounts-print.service';

import { AccountTransactionsComponent } from '../account-transactions/account-transactions.component';
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from '../../../module-utilities/delete-modal/delete-modal.component'


@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.scss']
})
export class ViewAccountComponent implements OnInit {

  constructor(
    private router: Router,
    private accountsApi: AccountsApiService,
    private accountsPrint: AccountsPrintService
  ) { }

  @ViewChild('accountTransactionsComponentReference', { read: AccountTransactionsComponent, static: false }) accountTransactions!: AccountTransactionsComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Accounts", url: "/home/accounts/all-accounts" },
    { text: "View Account", url: "/home/accounts/view-account" },
  ];

  accountForm: FormGroup = new FormGroup({});

  balance = 0;

  accountFormData = {};
  transactionsGridData = [];

  isAccountSaving: boolean = false;

  ngOnInit(): void {
    this.initAccountForm();
  }

  ngAfterViewInit(): void {
    this.getAccount();
  }

  initAccountForm(){
    this.accountForm = new FormGroup({
      accountName: new FormControl(''),
      accountNumber: new FormControl(''),
      bankName: new FormControl(''),
      accountType: new FormControl('')
    })
  }

  getAccount(){
    this.accountsApi.getSingleAccount()
      .subscribe(
        res => {
          console.log(res);
          this.accountForm.controls.accountName.setValue(res.account_name);
          this.accountForm.controls.accountNumber.setValue(res.account_number);
          this.accountForm.controls.bankName.setValue(res.bank_name);
          this.accountForm.controls.accountType.setValue(res.account_type);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  putAccount(){
    let data = {
      user: localStorage.getItem('personal_id'),
      account_name: this.accountForm.controls.accountName.value,
      account_number: this.accountForm.controls.accountNumber.value,
      bank_name: this.accountForm.controls.bankName.value,
      account_type: this.accountForm.controls.accountType.value
    }

    console.log(data);
    this.isAccountSaving = true;

    this.accountsApi.putAccount(data)
      .subscribe(
        res => {
          console.log(res);
          this.isAccountSaving = false;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
          this.isAccountSaving = false;
        }
      )
  }

  deleteAccount(){
    this.accountsApi.deleteAccount()
      .subscribe(
        res => {
          console.log(res);
          this.router.navigateByUrl('/home/accounts/all-accounts');
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  onPrint(){
    console.log("lets start printing...");
    this.accountsPrint.getPrintAccount();
  }

}
