import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasingPageRoutingModule } from './purchasing-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { PurchasingPageComponent } from './purchasing-page.component';


@NgModule({
  declarations: [
    PurchasingPageComponent
  ],
  imports: [
    CommonModule,
    PurchasingPageRoutingModule,
    MainNavbarModule,
  ]
})
export class PurchasingPageModule { }
