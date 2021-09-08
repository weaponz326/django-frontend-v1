import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispensaryPageRoutingModule } from './dispensary-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { DispensaryPageComponent } from './dispensary-page.component';


@NgModule({
  declarations: [
    DispensaryPageComponent
  ],
  imports: [
    CommonModule,
    DispensaryPageRoutingModule,
    MainNavbarModule,
  ]
})
export class DispensaryPageModule { }
