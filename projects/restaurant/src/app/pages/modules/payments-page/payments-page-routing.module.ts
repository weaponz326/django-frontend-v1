import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaymentsPageComponent } from './payments-page.component';
import { DashboardComponent } from '../../../components/modules/payments/dashboard/dashboard.component';
import { AllPaymentsComponent } from '../../../components/modules/payments/all-payments/all-payments.component';
import { NewPaymentComponent } from '../../../components/modules/payments/new-payment/new-payment.component';
import { ViewPaymentComponent } from '../../../components/modules/payments/view-payment/view-payment.component';


const routes: Routes = [
  {
    path: "",
    component: PaymentsPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "all-payments", component: AllPaymentsComponent },
      { path: "new-payment", component: NewPaymentComponent },
      { path: "view-payment", component: ViewPaymentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsPageRoutingModule { }
