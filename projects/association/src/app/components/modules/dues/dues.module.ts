import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllDuesComponent } from './all-dues/all-dues.component';
import { CreateDuesComponent } from './create-dues/create-dues.component';
import { ViewDuesComponent } from './view-dues/view-dues.component';
import { DuesFormComponent } from './dues-form/dues-form.component';
import { DuesPaymentComponent } from './dues-payment/dues-payment.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllDuesComponent,
    CreateDuesComponent,
    ViewDuesComponent,
    DuesFormComponent,
    DuesPaymentComponent,
    AddPaymentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DuesModule { }
