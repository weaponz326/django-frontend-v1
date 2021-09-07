import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { OrderFormComponent } from './order-form/order-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllOrdersComponent,
    NewOrderComponent,
    ViewOrderComponent,
    OrderFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
