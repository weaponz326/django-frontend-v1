import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestsPageRoutingModule } from './guests-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { GuestsPageComponent } from './guests-page.component';


@NgModule({
  declarations: [
    GuestsPageComponent
  ],
  imports: [
    CommonModule,
    GuestsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class GuestsPageModule { }
