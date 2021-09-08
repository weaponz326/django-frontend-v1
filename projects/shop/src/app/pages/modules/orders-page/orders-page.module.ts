import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersPageRoutingModule } from './orders-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { OrdersPageComponent } from './orders-page.component';


@NgModule({
  declarations: [
    OrdersPageComponent
  ],
  imports: [
    CommonModule,
    OrdersPageRoutingModule,
    MainNavbarModule,
  ]
})
export class OrdersPageModule { }
