import { Component, OnInit, ViewChild } from '@angular/core';

import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.scss']
})
export class AllTransactionsComponent implements OnInit {

  constructor(private accountsApi: AccountsApiService) { }

  @ViewChild('transactionsGridReference', { read: GridComponent, static: false }) transactionsGrid!: GridComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "All Transactions", url: "/home/accounts/all-transactions" },
  ];

  columns: GridColumn[] = <GridColumn[]>[];
  dataSource = [];
  editing = {};

  ngOnInit(): void {
    this.initGrid();
  }

  initGrid(){
    this.dataSource = new Smart.DataAdapter (
      <DataAdapter>{
        dataSource: [],
        dataFields:[
          'id: string',
          'trasanction_date: string',
          'account_name: string',
          'bank_name: string',
          'description: string',
          'trasanction_type: string',
          'amount: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Transaction Date", dataField: "transaction_date", width: "15%" },
      { label: "Account Name", dataField: "account_name", width: "18%" },
      { label: "Bank", dataField: "bank_name", width: "18%" },
      { label: "Description", dataField: "description", width: "25%" },
      { label: "Transaction Type", dataField: "transaction_type", width: "12%" },
      { label: "Amount", dataField: "amount", width: "12%" },
    ]
  }

}
