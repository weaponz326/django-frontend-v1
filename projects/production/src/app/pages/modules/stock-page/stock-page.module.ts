import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockPageRoutingModule } from './stock-page-routing.module';
import { StockPageComponent } from './stock-page.component';


@NgModule({
  declarations: [
    StockPageComponent
  ],
  imports: [
    CommonModule,
    StockPageRoutingModule
  ]
})
export class StockPageModule { }
