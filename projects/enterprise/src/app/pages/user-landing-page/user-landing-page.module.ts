import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLandingPageRoutingModule } from './user-landing-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { SuiteLandingModule } from 'projects/personal/src/app/components/suite-landing/suite-landing.module';

import { UserLandingPageComponent } from './user-landing-page.component';


@NgModule({
  declarations: [
    UserLandingPageComponent
  ],
  imports: [
    CommonModule,
    UserLandingPageRoutingModule,
    MainNavbarModule,
    SuiteLandingModule
  ]
})
export class UserLandingPageModule { }
