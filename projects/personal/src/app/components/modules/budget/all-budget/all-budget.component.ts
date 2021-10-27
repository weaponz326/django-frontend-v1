import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';

import { AllBudgetPrintComponent } from 'projects/personal/src/app/components/printing/budget-print/all-budget-print/all-budget-print.component'
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'
import { NewBudgetComponent } from '../new-budget/new-budget.component'


@Component({
  selector: 'app-all-budget',
  templateUrl: './all-budget.component.html',
  styleUrls: ['./all-budget.component.scss']
})
export class AllBudgetComponent implements OnInit {

  constructor(
    private router: Router,
    private budgetApi: BudgetApiService
  ) { }

  @ViewChild('newBudgetButtonReference', { read: ButtonComponent, static: false }) newBudgetButton!: ButtonComponent;
  @ViewChild('budgetsGridReference', { read: GridComponent, static: false }) budgetsGrid!: GridComponent;

  @ViewChild('allBudgetPrintComponentReference', { read: AllBudgetPrintComponent, static: false }) allBudgetPrint!: AllBudgetPrintComponent;
  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;
  @ViewChild('newBudgetComponentReference', { read: NewBudgetComponent, static: false }) newBudget!: NewBudgetComponent;

  navHeading: any[] = [
    { text: "All Budgets", url: "/home/budget/all-budget" },
  ];

  sorting = { enabled: true }
  filtering = { enabled: true }
  editing = {};
  dataSource = [];
  columns: GridColumn[] = <GridColumn[]>[];

  budgetGridData = [];

  ngOnInit(): void {
    this.initGrid();
  }

  getAppointments(){
    this.budgetApi.getBudgets()
      .subscribe(
        res => {
          console.log(res);
          this.dataSource = res;
          this.budgetGridData = res;
        },
        err => {
          console.log(err);
          this.connectionPrompt.toast.open();
        }
      )
  }

  viewBudget(e: any){
    console.log(e);

    sessionStorage.setItem("personal_budget_id", e.detail.row.data.id);
    this.router.navigateByUrl("/home/budgets/view-budget");
  }

  initGrid(){
    this.dataSource = new Smart.DataAdapter (
      <DataAdapter>{
        id: 'id',
        dataSource: this.getAppointments(),
        dataFields:[
          'id: string',
          'budget_code: string',
          'budget_name: string',
          'budget_type: string',
        ]
      }
    );

    this.editing = {
      enabled: true,
      addDialog: {
        enabled: true,
        position: 'both',
      },
    }

    this.columns = <GridColumn[]>[
      { label: "Budget ID", dataField: "budget_code", width: "20%" },
      { label: "Budget Name", dataField: "budget_name", width: "50%" },
      { label: "Budget Type", dataField: "budget_type", width: "30%" },
    ]
  }

  onPrint(){
    console.log("lets start printing...");
    this.allBudgetPrint.print();
  }

}
