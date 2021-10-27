import { Component, OnInit, ViewChild } from '@angular/core';

import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';

import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';

import { ViewBudgetPrintComponent } from 'projects/personal/src/app/components/printing/budget-print/view-budget-print/view-budget-print.component'
import { ConnectionPromptComponent } from '../../../module-utilities/connection-prompt/connection-prompt.component'


@Component({
  selector: 'app-view-budget',
  templateUrl: './view-budget.component.html',
  styleUrls: ['./view-budget.component.scss']
})
export class ViewBudgetComponent implements OnInit {

  constructor(private budgetApi: BudgetApiService) { }

  @ViewChild('budgetCodeInputReference', { read: InputComponent, static: false }) budgetCodeInput!: InputComponent;
  @ViewChild('budgetNameInputReference', { read: InputComponent, static: false }) budgetNameInput!: InputComponent;
  @ViewChild('budgetTypeDropDownListReference', { read: DropDownListComponent, static: false }) budgetTypeDropDownList!: DropDownListComponent;

  @ViewChild('viewBudgetPrintComponentReference', { read: ViewBudgetPrintComponent, static: false }) viewBudgetPrint!: ViewBudgetPrintComponent;
  @ViewChild('connectionPromptComponentReference', { read: ConnectionPromptComponent, static: false }) connectionPrompt!: ConnectionPromptComponent;

  navHeading: any[] = [
    { text: "All Budgets", url: "/suite/budget/all-budget" },
    { text: "View Budget", url: "/suite/budget/view-budget" },
  ];

  ngOnInit(): void {
  }

  // TODO:
  // get all budgets
  // get income and expenditure here and pass to view and print grids

  onPrint(){
    console.log("lets start printing...");
    this.viewBudgetPrint.print();
  }

}
