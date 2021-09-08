import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RosterPageRoutingModule } from './roster-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { RosterPageComponent } from './roster-page.component';


@NgModule({
  declarations: [
    RosterPageComponent
  ],
  imports: [
    CommonModule,
    RosterPageRoutingModule,
    MainNavbarModule,
  ]
})
export class RosterPageModule { }
