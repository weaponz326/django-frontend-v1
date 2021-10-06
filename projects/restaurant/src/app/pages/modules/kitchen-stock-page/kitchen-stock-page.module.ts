import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenStockPageRoutingModule } from './kitchen-stock-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { KitchenStockModule } from '../../../components/modules/kitchen-stock/kitchen-stock.module';

import { KitchenStockPageComponent } from './kitchen-stock-page.component';


@NgModule({
  declarations: [
    KitchenStockPageComponent
  ],
  imports: [
    CommonModule,
    KitchenStockPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    KitchenStockModule,
  ]
})
export class KitchenStockPageModule { }
