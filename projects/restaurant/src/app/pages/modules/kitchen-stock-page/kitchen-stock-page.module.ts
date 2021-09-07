import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenStockPageRoutingModule } from './kitchen-stock-page-routing.module';
import { KitchenStockPageComponent } from './kitchen-stock-page.component';


@NgModule({
  declarations: [
    KitchenStockPageComponent
  ],
  imports: [
    CommonModule,
    KitchenStockPageRoutingModule
  ]
})
export class KitchenStockPageModule { }
