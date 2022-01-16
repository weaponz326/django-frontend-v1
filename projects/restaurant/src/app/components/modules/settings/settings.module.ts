import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { TabsModule } from 'smart-webcomponents-angular/tabs';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { NumericTextBoxModule } from 'smart-webcomponents-angular/numerictextbox';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { BillingComponent } from './billing/billing.component';
import { BasicComponent } from './profile-content/basic/basic.component';
import { LogoComponent } from './profile-content/logo/logo.component';
import { LocationComponent } from './profile-content/location/location.component';
import { ContactComponent } from './profile-content/contact/contact.component';
import { PaymentsHistoryComponent } from './payments-history/payments-history.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    ProfileComponent,
    BillingComponent,
    BasicComponent,
    LogoComponent,
    LocationComponent,
    ContactComponent,
    PaymentsHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    TabsModule,
    ButtonModule,
    InputModule,
    MultilineTextBoxModule,
    DropDownListModule,
    NumericTextBoxModule,
    ModuleUtilitiesModule,
  ]
})
export class SettingsModule { }
