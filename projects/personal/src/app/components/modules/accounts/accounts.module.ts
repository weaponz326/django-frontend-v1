import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { WindowModule } from 'smart-webcomponents-angular/window';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';
import { AccountsPrintModule } from '../../printing/accounts-print/accounts-print.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { AccountTransactionsComponent } from './account-transactions/account-transactions.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { AllTransactionsComponent } from './all-transactions/all-transactions.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllAccountsComponent,
    AddAccountComponent,
    ViewAccountComponent,
    AccountTransactionsComponent,
    AddTransactionComponent,
    EditTransactionComponent,
    TransactionFormComponent,
    AllTransactionsComponent
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
    AccountsPrintModule,
  ]
})
export class AccountsModule { }
