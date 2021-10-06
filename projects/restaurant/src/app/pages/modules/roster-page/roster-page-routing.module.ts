import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RosterPageComponent } from './roster-page.component';
import { DashboardComponent } from '../../../components/modules/roster/dashboard/dashboard.component';
import { AllRosterComponent } from '../../../components/modules/roster/all-roster/all-roster.component';
import { ViewRosterComponent } from '../../../components/modules/roster/view-roster/view-roster.component';
import { ManageBatchesComponent } from '../../../components/modules/roster/manage-batches/manage-batches.component';


const routes: Routes = [
  {
    path: "",
    component: RosterPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "all-roster", component: AllRosterComponent },
      { path: "view-roster", component: ViewRosterComponent },
      { path: "manage-batches", component: ManageBatchesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RosterPageRoutingModule { }
