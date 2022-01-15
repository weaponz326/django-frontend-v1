import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountsPageComponent } from './accounts-page.component';
import { AllAccountsComponent } from '../../../components/modules/accounts/all-accounts/all-accounts.component';
import { ViewAccountComponent } from '../../../components/modules/accounts/view-account/view-account.component';
import { AllTransactionsComponent } from '../../../components/modules/accounts/all-transactions/all-transactions.component';
import { DashboardComponent } from '../../../components/modules/accounts/dashboard/dashboard.component';

import { ViewAccountGuard } from '../../../guards/modules/accounts/view-account.guard';


const routes: Routes = [
  {
    path: "",
    component: AccountsPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "all-accounts", component: AllAccountsComponent },
      { path: "view-account", component: ViewAccountComponent, canActivate: [ViewAccountGuard] },
      { path: "all-transactions", component: AllTransactionsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsPageRoutingModule { }
