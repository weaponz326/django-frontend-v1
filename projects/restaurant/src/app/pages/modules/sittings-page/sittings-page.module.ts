import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SittingsPageRoutingModule } from './sittings-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { SittingsModule } from '../../../components/modules/sittings/sittings.module';

import { SittingsPageComponent } from './sittings-page.component';


@NgModule({
  declarations: [
    SittingsPageComponent
  ],
  imports: [
    CommonModule,
    SittingsPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    SittingsModule,
  ]
})
export class SittingsPageModule { }
