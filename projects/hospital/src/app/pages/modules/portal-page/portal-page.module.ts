import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalPageRoutingModule } from './portal-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { PortalPageComponent } from './portal-page.component';


@NgModule({
  declarations: [
    PortalPageComponent
  ],
  imports: [
    CommonModule,
    PortalPageRoutingModule,
    MainNavbarModule,
  ]
})
export class PortalPageModule { }
