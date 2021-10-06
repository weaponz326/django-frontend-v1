import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveriesPageRoutingModule } from './deliveries-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { DeliveriesModule } from '../../../components/modules/deliveries/deliveries.module';

import { DeliveriesPageComponent } from './deliveries-page.component';


@NgModule({
  declarations: [
    DeliveriesPageComponent
  ],
  imports: [
    CommonModule,
    DeliveriesPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    DeliveriesModule,
  ]
})
export class DeliveriesPageModule { }
