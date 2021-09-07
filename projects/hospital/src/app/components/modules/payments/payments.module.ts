import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllPaymentsComponent } from './all-payments/all-payments.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { PaymentsHistoryComponent } from './payments-history/payments-history.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllPaymentsComponent,
    NewPaymentComponent,
    ViewPaymentComponent,
    PaymentsHistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentsModule { }
