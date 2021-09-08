import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryPageRoutingModule } from './inventory-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { InventoryPageComponent } from './inventory-page.component';


@NgModule({
  declarations: [
    InventoryPageComponent
  ],
  imports: [
    CommonModule,
    InventoryPageRoutingModule,
    MainNavbarModule,
  ]
})
export class InventoryPageModule { }
