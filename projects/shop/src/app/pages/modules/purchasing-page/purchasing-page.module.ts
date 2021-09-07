import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasingPageRoutingModule } from './purchasing-page-routing.module';
import { PurchasingPageComponent } from './purchasing-page.component';


@NgModule({
  declarations: [
    PurchasingPageComponent
  ],
  imports: [
    CommonModule,
    PurchasingPageRoutingModule
  ]
})
export class PurchasingPageModule { }
