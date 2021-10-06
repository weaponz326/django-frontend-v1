import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersPageRoutingModule } from './orders-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { OrdersModule } from '../../../components/modules/orders/orders.module';

import { OrdersPageComponent } from './orders-page.component';


@NgModule({
  declarations: [
    OrdersPageComponent
  ],
  imports: [
    CommonModule,
    OrdersPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    OrdersModule,
  ]
})
export class OrdersPageModule { }
