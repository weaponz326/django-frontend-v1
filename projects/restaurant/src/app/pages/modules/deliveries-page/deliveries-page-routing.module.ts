import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeliveriesPageComponent } from './deliveries-page.component';
import { DashboardComponent } from '../../../components/modules/deliveries/dashboard/dashboard.component';
import { AllDeliveriesComponent } from '../../../components/modules/deliveries/all-deliveries/all-deliveries.component';


const routes: Routes = [
  {
    path: "",
    component: DeliveriesPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "all-deliveries", component: AllDeliveriesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveriesPageRoutingModule { }
