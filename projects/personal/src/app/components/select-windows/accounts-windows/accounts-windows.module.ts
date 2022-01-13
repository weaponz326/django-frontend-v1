import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';

import { SelectAccountComponent } from './select-account/select-account.component';
import { SelectTransactionComponent } from './select-transaction/select-transaction.component';


@NgModule({
  declarations: [
    SelectAccountComponent,
    SelectTransactionComponent
  ],
  imports: [
    CommonModule,
    ModuleUtilitiesModule,
  ],
  exports: [
    SelectAccountComponent,
    SelectTransactionComponent
  ]
})
export class AccountsWindowsModule { }
