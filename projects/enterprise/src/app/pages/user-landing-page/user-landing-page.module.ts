import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLandingPageRoutingModule } from './user-landing-page-routing.module';
import { UserLandingPageComponent } from './user-landing-page.component';


@NgModule({
  declarations: [
    UserLandingPageComponent
  ],
  imports: [
    CommonModule,
    UserLandingPageRoutingModule
  ]
})
export class UserLandingPageModule { }
