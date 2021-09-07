import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RosterPageRoutingModule } from './roster-page-routing.module';
import { RosterPageComponent } from './roster-page.component';


@NgModule({
  declarations: [
    RosterPageComponent
  ],
  imports: [
    CommonModule,
    RosterPageRoutingModule
  ]
})
export class RosterPageModule { }
