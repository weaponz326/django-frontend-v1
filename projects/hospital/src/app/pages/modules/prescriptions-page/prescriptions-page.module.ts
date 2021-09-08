import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionsPageRoutingModule } from './prescriptions-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { PrescriptionsPageComponent } from './prescriptions-page.component';


@NgModule({
  declarations: [
    PrescriptionsPageComponent
  ],
  imports: [
    CommonModule,
    PrescriptionsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class PrescriptionsPageModule { }
