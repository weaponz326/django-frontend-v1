import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestsPageRoutingModule } from './guests-page-routing.module';
import { GuestsPageComponent } from './guests-page.component';


@NgModule({
  declarations: [
    GuestsPageComponent
  ],
  imports: [
    CommonModule,
    GuestsPageRoutingModule
  ]
})
export class GuestsPageModule { }
