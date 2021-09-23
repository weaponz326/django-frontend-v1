import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsPageComponent } from './settings-page.component';
import { DashboardComponent } from '../../../components/modules/settings/dashboard/dashboard.component';
import { SettingsComponent } from '../../../components/modules/settings/settings/settings.component';
import { ProfileComponent } from '../../../components/modules/settings/profile/profile.component';
import { BillingComponent } from '../../../components/modules/settings/billing/billing.component';
import { PaymentsHistoryComponent } from '../../../components/modules/settings/payments-history/payments-history.component';


const routes: Routes = [
  {
    path: "",
    component: SettingsPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "profile", component: ProfileComponent },
      { path: "billing", component: BillingComponent },
      { path: "payments-history", component: PaymentsHistoryComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsPageRoutingModule { }
