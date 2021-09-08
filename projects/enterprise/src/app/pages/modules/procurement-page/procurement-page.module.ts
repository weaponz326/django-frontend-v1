import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcurementPageRoutingModule } from './procurement-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { ProcurementPageComponent } from './procurement-page.component';


@NgModule({
  declarations: [
    ProcurementPageComponent
  ],
  imports: [
    CommonModule,
    ProcurementPageRoutingModule,
    MainNavbarModule,
  ]
})
export class ProcurementPageModule { }
