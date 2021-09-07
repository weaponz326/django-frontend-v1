import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeesPageRoutingModule } from './fees-page-routing.module';
import { FeesPageComponent } from './fees-page.component';


@NgModule({
  declarations: [
    FeesPageComponent
  ],
  imports: [
    CommonModule,
    FeesPageRoutingModule
  ]
})
export class FeesPageModule { }
