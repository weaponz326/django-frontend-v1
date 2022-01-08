import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

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
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ModuleUtilitiesModule,
    AccountsPrintModule,
  ]
})
export class AccountsModule { }
