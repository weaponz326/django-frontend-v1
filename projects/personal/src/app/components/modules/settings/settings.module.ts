import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { BasicComponent } from './profile-content/basic/basic.component';
import { AdditionalComponent } from './profile-content/additional/additional.component';
import { PhotoComponent } from './profile-content/photo/photo.component';
import { ContactComponent } from './profile-content/contact/contact.component';
import { LocationComponent } from './profile-content/location/location.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    ProfileComponent,
    BasicComponent,
    AdditionalComponent,
    PhotoComponent,
    ContactComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class SettingsModule { }
