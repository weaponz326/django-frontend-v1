import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersPageComponent } from './orders-page.component';
import { DashboardComponent } from '../../../components/modules/orders/dashboard/dashboard.component';
import { AllOrdersComponent } from '../../../components/modules/orders/all-orders/all-orders.component';
import { AddOrderComponent } from '../../../components/modules/orders/add-order/add-order.component';
import { ViewOrderComponent } from '../../../components/modules/orders/view-order/view-order.component';


const routes: Routes = [
  {
    path: "",
    component: OrdersPageComponent,
    children: [
      { path: "", component: AllOrdersComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "all-orders", component: AllOrdersComponent },
      { path: "add-order", component: AddOrderComponent },
      { path: "view-order", component: ViewOrderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersPageRoutingModule { }
