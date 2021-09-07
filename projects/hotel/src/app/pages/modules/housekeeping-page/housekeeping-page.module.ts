import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousekeepingPageRoutingModule } from './housekeeping-page-routing.module';
import { HousekeepingPageComponent } from './housekeeping-page.component';


@NgModule({
  declarations: [
    HousekeepingPageComponent
  ],
  imports: [
    CommonModule,
    HousekeepingPageRoutingModule
  ]
})
export class HousekeepingPageModule { }
