import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.scss']
})
export class AllAccountsComponent implements OnInit {

  constructor(private accountsApi: AccountsApiService) { }

  @ViewChild('newAccountButtonReference', { read: ButtonComponent, static: false }) newAccountButton!: ButtonComponent;
  @ViewChild('accountsGridReference', { read: GridComponent, static: false }) accountsGrid!: GridComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "All Accounts", url: "/home/accounts/all-accounts" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];
  editing = {}

  ngOnInit(): void {
    this.initGrid();
  }

  getAccounts(){
    this.accountsApi.getAccounts()
      .subscribe(
        res => {
          console.log(res);
          this.dataSource = res;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  initGrid(){
    this.dataSource = new Smart.DataAdapter (
      <DataAdapter>{
        id: 'id',
        dataSource: this.getAccounts(),
        dataFields:[
          'id: string',
          'account_name: string',
          'account_number: string',
          'bank_name: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Account Name", dataField: "account_name", width: "45%" },
      { label: "Account No.", dataField: "account_number", width: "25%" },
      { label: "Bank Name", dataField: "bank_name", width: "30%" },
    ]

    this.editing = {
      enabled: true,
      action: 'click',
      addDialog: {
        enabled: true,
      },
      addNewRow: {
        visible: true,
        position: 'near',
        // displayMode: 'button',
        // header: "Add New Account"
      }
    }
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
