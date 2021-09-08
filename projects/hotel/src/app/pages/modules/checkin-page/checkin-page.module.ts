import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckinPageRoutingModule } from './checkin-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { CheckinPageComponent } from './checkin-page.component';


@NgModule({
  declarations: [
    CheckinPageComponent
  ],
  imports: [
    CommonModule,
    CheckinPageRoutingModule,
    MainNavbarModule,
  ]
})
export class CheckinPageModule { }
