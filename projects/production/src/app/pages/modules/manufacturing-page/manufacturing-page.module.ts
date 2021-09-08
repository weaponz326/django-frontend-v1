import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturingPageRoutingModule } from './manufacturing-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { ManufacturingPageComponent } from './manufacturing-page.component';


@NgModule({
  declarations: [
    ManufacturingPageComponent
  ],
  imports: [
    CommonModule,
    ManufacturingPageRoutingModule,
    MainNavbarModule,
  ]
})
export class ManufacturingPageModule { }
