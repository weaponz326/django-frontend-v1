import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsPageRoutingModule } from './settings-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { SettingsModule } from '../../../components/modules/settings/settings.module';

import { SettingsPageComponent } from './settings-page.component';


@NgModule({
  declarations: [
    SettingsPageComponent
  ],
  imports: [
    CommonModule,
    SettingsPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    SettingsModule,
  ]
})
export class SettingsPageModule { }
