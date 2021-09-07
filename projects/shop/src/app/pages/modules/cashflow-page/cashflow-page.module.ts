import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashflowPageRoutingModule } from './cashflow-page-routing.module';
import { CashflowPageComponent } from './cashflow-page.component';


@NgModule({
  declarations: [
    CashflowPageComponent
  ],
  imports: [
    CommonModule,
    CashflowPageRoutingModule
  ]
})
export class CashflowPageModule { }
