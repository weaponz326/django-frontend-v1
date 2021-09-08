import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashflowPageRoutingModule } from './cashflow-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { CashflowPageComponent } from './cashflow-page.component';


@NgModule({
  declarations: [
    CashflowPageComponent
  ],
  imports: [
    CommonModule,
    CashflowPageRoutingModule,
    MainNavbarModule,
  ]
})
export class CashflowPageModule { }
