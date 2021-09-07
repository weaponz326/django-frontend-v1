import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalPageRoutingModule } from './portal-page-routing.module';
import { PortalPageComponent } from './portal-page.component';


@NgModule({
  declarations: [
    PortalPageComponent
  ],
  imports: [
    CommonModule,
    PortalPageRoutingModule
  ]
})
export class PortalPageModule { }
