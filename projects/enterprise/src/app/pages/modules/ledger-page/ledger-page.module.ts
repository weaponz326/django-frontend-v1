import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LedgerPageRoutingModule } from './ledger-page-routing.module';
import { LedgerPageComponent } from './ledger-page.component';


@NgModule({
  declarations: [
    LedgerPageComponent
  ],
  imports: [
    CommonModule,
    LedgerPageRoutingModule
  ]
})
export class LedgerPageModule { }
