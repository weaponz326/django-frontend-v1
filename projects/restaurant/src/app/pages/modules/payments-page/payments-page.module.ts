import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsPageRoutingModule } from './payments-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { PaymentsModule } from '../../../components/modules/payments/payments.module';

import { PaymentsPageComponent } from './payments-page.component';


@NgModule({
  declarations: [
    PaymentsPageComponent
  ],
  imports: [
    CommonModule,
    PaymentsPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    PaymentsModule,
  ]
})
export class PaymentsPageModule { }
