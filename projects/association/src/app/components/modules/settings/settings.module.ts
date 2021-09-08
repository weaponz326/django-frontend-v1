import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { BillingComponent } from './billing/billing.component';
import { BasicComponent } from './profile-content/basic/basic.component';
import { LogoComponent } from './profile-content/logo/logo.component';
import { LocationComponent } from './profile-content/location/location.component';
import { ContactComponent } from './profile-content/contact/contact.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    ProfileComponent,
    BillingComponent,
    BasicComponent,
    LogoComponent,
    LocationComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class SettingsModule { }
