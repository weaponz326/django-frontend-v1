import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { TabsModule } from 'smart-webcomponents-angular/tabs';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';
import { CustomWidgetsModule } from '../../custom-widgets/custom-widgets.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { BasicComponent } from './profile-content/basic/basic.component';
import { AdditionalComponent } from './profile-content/additional/additional.component';
import { PhotoComponent } from './profile-content/photo/photo.component';
import { ContactComponent } from './profile-content/contact/contact.component';
import { LocationComponent } from './profile-content/location/location.component';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    ProfileComponent,
    BasicComponent,
    AdditionalComponent,
    PhotoComponent,
    ContactComponent,
    LocationComponent,
    AllAccountsComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    TabsModule,
    ButtonModule,
    InputModule,
    MultilineTextBoxModule,
    DropDownListModule,
    ModuleUtilitiesModule,
    CustomWidgetsModule,
  ]
})
export class SettingsModule { }
