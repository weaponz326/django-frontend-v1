import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckinPageRoutingModule } from './checkin-page-routing.module';
import { CheckinPageComponent } from './checkin-page.component';


@NgModule({
  declarations: [
    CheckinPageComponent
  ],
  imports: [
    CommonModule,
    CheckinPageRoutingModule
  ]
})
export class CheckinPageModule { }
