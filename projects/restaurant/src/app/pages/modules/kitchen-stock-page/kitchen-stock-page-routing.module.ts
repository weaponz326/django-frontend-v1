import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KitchenStockPageComponent } from './kitchen-stock-page.component';
import { DashboardComponent } from '../../../components/modules/kitchen-stock/dashboard/dashboard.component';
import { AllStockItemsComponent } from '../../../components/modules/kitchen-stock/all-stock-items/all-stock-items.component';
import { AddStockItemComponent } from '../../../components/modules/kitchen-stock/add-stock-item/add-stock-item.component';
import { EditStockItemComponent } from '../../../components/modules/kitchen-stock/edit-stock-item/edit-stock-item.component';


const routes: Routes = [
  {
    path: "",
    component: KitchenStockPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "all-stock-items", component: AllStockItemsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitchenStockPageRoutingModule { }
