import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { MainNavbarModule } from '../../components/main-navbar/main-navbar.module';
import { MainLandingModule } from '../../components/main-landing/main-landing.module';

import { LandingPageComponent } from './landing-page.component';


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MainNavbarModule,
    MainLandingModule
  ]
})
export class LandingPageModule { }
