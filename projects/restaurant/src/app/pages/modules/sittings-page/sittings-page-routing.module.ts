import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SittingsPageComponent } from './sittings-page.component';
import { DashboardComponent } from '../../../components/modules/sittings/dashboard/dashboard.component';
import { AllSittingsComponent } from '../../../components/modules/sittings/all-sittings/all-sittings.component';


const routes: Routes = [
  {
    path: "",
    component: SittingsPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "all-sittings", component: AllSittingsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SittingsPageRoutingModule { }
