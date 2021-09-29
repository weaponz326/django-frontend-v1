import { Component, OnInit, ViewChild } from '@angular/core';

import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.scss']
})
export class AccountTransactionsComponent implements OnInit {

  constructor(private accountsApi: AccountsApiService) { }

  @ViewChild('transactionsGridReference', { read: GridComponent, static: false }) transactionsGrid!: GridComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

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
          'description: string',
          'trasanction_type: string',
          'amount: string',
        ]
      }
    );

    this.columns = <GridColumn[]>[
      { label: "Transaction Date", dataField: "transaction_date", width: "25%" },
      { label: "Description", dataField: "description", width: "40%" },
      { label: "Transaction Type", dataField: "transaction_type", width: "15%" },
      { label: "Amount", dataField: "amount", width: "20%" },
    ]
  }

}
