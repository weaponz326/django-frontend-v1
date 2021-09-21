import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalPageRoutingModule } from './portal-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { PortalModule } from '../../../components/modules/portal/portal.module';

import { PortalPageComponent } from './portal-page.component';


@NgModule({
  declarations: [
    PortalPageComponent
  ],
  imports: [
    CommonModule,
    PortalPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    PortalModule,
  ]
})
export class PortalPageModule { }
