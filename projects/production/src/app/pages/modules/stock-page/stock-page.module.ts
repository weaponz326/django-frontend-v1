import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockPageRoutingModule } from './stock-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { StockPageComponent } from './stock-page.component';


@NgModule({
  declarations: [
    StockPageComponent
  ],
  imports: [
    CommonModule,
    StockPageRoutingModule,
    MainNavbarModule,
  ]
})
export class StockPageModule { }
