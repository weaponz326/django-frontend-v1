import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveriesPageRoutingModule } from './deliveries-page-routing.module';
import { DeliveriesPageComponent } from './deliveries-page.component';


@NgModule({
  declarations: [
    DeliveriesPageComponent
  ],
  imports: [
    CommonModule,
    DeliveriesPageRoutingModule
  ]
})
export class DeliveriesPageModule { }
