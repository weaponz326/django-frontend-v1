import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenStockPageRoutingModule } from './kitchen-stock-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { KitchenStockPageComponent } from './kitchen-stock-page.component';


@NgModule({
  declarations: [
    KitchenStockPageComponent
  ],
  imports: [
    CommonModule,
    KitchenStockPageRoutingModule,
    MainNavbarModule,
  ]
})
export class KitchenStockPageModule { }
