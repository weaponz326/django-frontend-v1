import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestLandingPageRoutingModule } from './guest-landing-page-routing.module';
import { GuestLandingPageComponent } from './guest-landing-page.component';


@NgModule({
  declarations: [
    GuestLandingPageComponent
  ],
  imports: [
    CommonModule,
    GuestLandingPageRoutingModule
  ]
})
export class GuestLandingPageModule { }
