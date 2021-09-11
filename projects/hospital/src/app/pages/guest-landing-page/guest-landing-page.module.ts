import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestLandingPageRoutingModule } from './guest-landing-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { SuiteLandingModule } from 'projects/personal/src/app/components/suite-landing/suite-landing.module';

import { GuestLandingPageComponent } from './guest-landing-page.component';


@NgModule({
  declarations: [
    GuestLandingPageComponent
  ],
  imports: [
    CommonModule,
    GuestLandingPageRoutingModule,
    MainNavbarModule,
    SuiteLandingModule
  ]
})
export class GuestLandingPageModule { }
