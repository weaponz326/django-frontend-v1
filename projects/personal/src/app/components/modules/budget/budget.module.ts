import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { WindowModule } from 'smart-webcomponents-angular/window';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';
import { BudgetPrintModule } from '../../printing/budget-print/budget-print.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllBudgetComponent } from './all-budget/all-budget.component';
import { NewBudgetComponent } from './new-budget/new-budget.component';
import { ViewBudgetComponent } from './view-budget/view-budget.component';
import { BudgetTablesComponent } from './budget-tables/budget-tables.component';
import { AddIncomeComponent } from './add-income/add-income.component';
import { AddExpenditureComponent } from './add-expenditure/add-expenditure.component';
import { EditIncomeComponent } from './edit-income/edit-income.component';
import { EditExpenditureComponent } from './edit-expenditure/edit-expenditure.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllBudgetComponent,
    NewBudgetComponent,
    ViewBudgetComponent,
    BudgetTablesComponent,
    AddIncomeComponent,
    AddExpenditureComponent,
    EditIncomeComponent,
    EditExpenditureComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    ButtonModule,
    InputModule,
    DropDownListModule,
    GridModule,
    WindowModule,
    ModuleUtilitiesModule,
    BudgetPrintModule,
  ]
})
export class BudgetModule { }
