import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousekeepingPageRoutingModule } from './housekeeping-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { HousekeepingPageComponent } from './housekeeping-page.component';


@NgModule({
  declarations: [
    HousekeepingPageComponent
  ],
  imports: [
    CommonModule,
    HousekeepingPageRoutingModule,
    MainNavbarModule,
  ]
})
export class HousekeepingPageModule { }
