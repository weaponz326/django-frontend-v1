import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsPageRoutingModule } from './accounts-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from '../../../components/module-utilities/module-utilities.module';
import { AccountsModule } from '../../../components/modules/accounts/accounts.module';

import { AccountsPageComponent } from './accounts-page.component';


@NgModule({
  declarations: [
    AccountsPageComponent
  ],
  imports: [
    CommonModule,
    AccountsPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    AccountsModule,
  ]
})
export class AccountsPageModule { }
