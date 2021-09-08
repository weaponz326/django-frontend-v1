import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeesPageRoutingModule } from './fees-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { FeesPageComponent } from './fees-page.component';


@NgModule({
  declarations: [
    FeesPageComponent
  ],
  imports: [
    CommonModule,
    FeesPageRoutingModule,
    MainNavbarModule,
  ]
})
export class FeesPageModule { }
