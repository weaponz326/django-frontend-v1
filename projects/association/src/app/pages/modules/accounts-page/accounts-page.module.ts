import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsPageRoutingModule } from './accounts-page-routing.module';
import { AccountsPageComponent } from './accounts-page.component';


@NgModule({
  declarations: [
    AccountsPageComponent
  ],
  imports: [
    CommonModule,
    AccountsPageRoutingModule
  ]
})
export class AccountsPageModule { }
