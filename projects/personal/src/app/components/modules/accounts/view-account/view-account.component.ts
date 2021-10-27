import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';

import { ViewAccountPrintComponent } from 'projects/personal/src/app/components/printing/accounts-print/view-account-print/view-account-print.component'
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.scss']
})
export class ViewAccountComponent implements OnInit {

  constructor(private accountsApi: AccountsApiService) { }

  @ViewChild('accountNameInputReference', { read: InputComponent, static: false }) accountNameInput!: InputComponent;
  @ViewChild('accountNumberInputReference', { read: InputComponent, static: false }) accountNumberInput!: InputComponent;
  @ViewChild('bankNameInputReference', { read: InputComponent, static: false }) bankNameInput!: InputComponent;
  @ViewChild('accountTypeDropDownListReference', { read: DropDownListComponent, static: false }) accountTypeDropDownList!: DropDownListComponent;

  @ViewChild('viewAccountPrintComponentReference', { read: ViewAccountPrintComponent, static: false }) viewAccountPrint!: ViewAccountPrintComponent;
  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "All Accounts", url: "/home/accounts/all-accounts" },
    { text: "View Account", url: "/home/accounts/view-account" },
  ];

  accountFormData = {};
  transactionsGridData = [];

  ngOnInit(): void {
  }

  onPrint(){
    console.log("lets start printing...");
    this.viewAccountPrint.print();
  }

}
