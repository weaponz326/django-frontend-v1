import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LedgerPageRoutingModule } from './ledger-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { LedgerPageComponent } from './ledger-page.component';


@NgModule({
  declarations: [
    LedgerPageComponent
  ],
  imports: [
    CommonModule,
    LedgerPageRoutingModule,
    MainNavbarModule,
  ]
})
export class LedgerPageModule { }
