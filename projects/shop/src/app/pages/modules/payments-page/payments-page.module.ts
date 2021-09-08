import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsPageRoutingModule } from './payments-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { PaymentsPageComponent } from './payments-page.component';


@NgModule({
  declarations: [
    PaymentsPageComponent
  ],
  imports: [
    CommonModule,
    PaymentsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class PaymentsPageModule { }
