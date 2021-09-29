import { Component, OnInit, ViewChild } from '@angular/core';

import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-budget-tables',
  templateUrl: './budget-tables.component.html',
  styleUrls: ['./budget-tables.component.scss']
})
export class BudgetTablesComponent implements OnInit {

  constructor(private budgetApi: BudgetApiService) { }

  @ViewChild('incomeGridReference', { read: GridComponent, static: false }) incomeGrid!: GridComponent;
  @ViewChild('expenditureGridReference', { read: GridComponent, static: false }) expenditureGrid!: GridComponent;

  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  incomeColumns: GridColumn[] = <GridColumn[]>[];
  expenditureColumns: GridColumn[] = <GridColumn[]>[];
  incomeDataSource = [];
  expenditureDataSource = [];
  incomeEditing = {};
  expenditureEditing = {};

  ngOnInit(): void {
    this.initIncomeGrid();
    this.initExpenditureGrid();
  }

  initIncomeGrid(){
    this.incomeDataSource = new Smart.DataAdapter (
      <DataAdapter>{
        dataSource: [],
        dataFields:[
          'id: string',
          'item: string',
          'amount: string',
        ]
      }
    );

    this.incomeColumns = <GridColumn[]>[
      { label: "Item Description", dataField: "item", width: "70%" },
      { label: "Amount", dataField: "amount", width: "30%" },
    ]
  }

  initExpenditureGrid(){
    this.expenditureDataSource = new Smart.DataAdapter (
      <DataAdapter>{
        dataSource: [],
        dataFields:[
          'id: string',
          'item: string',
          'amount: string',
        ]
      }
    );

    this.expenditureColumns = <GridColumn[]>[
      { label: "Item Description", dataField: "item", width: "70%" },
      { label: "Amount", dataField: "amount", width: "30%" },
    ]
  }

}
