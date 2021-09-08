import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveriesPageRoutingModule } from './deliveries-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { DeliveriesPageComponent } from './deliveries-page.component';


@NgModule({
  declarations: [
    DeliveriesPageComponent
  ],
  imports: [
    CommonModule,
    DeliveriesPageRoutingModule,
    MainNavbarModule,
  ]
})
export class DeliveriesPageModule { }
