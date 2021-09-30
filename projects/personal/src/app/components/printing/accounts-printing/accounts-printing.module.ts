import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintAllAccountsComponent } from './print-all-accounts/print-all-accounts.component';
import { PrintViewAccountComponent } from './print-view-account/print-view-account.component';



@NgModule({
  declarations: [
    PrintAllAccountsComponent,
    PrintViewAccountComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountsPrintingModule { }
