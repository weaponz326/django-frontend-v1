import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsPageComponent } from './settings-page.component';
import { DashboardComponent } from '../../../components/modules/settings/dashboard/dashboard.component';
import { AllAccountsComponent } from '../../../components/modules/settings/all-accounts/all-accounts.component';
import { ProfileComponent } from '../../../components/modules/settings/profile/profile.component';

const routes: Routes = [
  {
    path: "",
    component: SettingsPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "profile", component: ProfileComponent },
      { path: "all-accounts", component: AllAccountsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsPageRoutingModule { }
