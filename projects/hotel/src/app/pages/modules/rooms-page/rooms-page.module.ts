import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsPageRoutingModule } from './rooms-page-routing.module';
import { RoomsPageComponent } from './rooms-page.component';


@NgModule({
  declarations: [
    RoomsPageComponent
  ],
  imports: [
    CommonModule,
    RoomsPageRoutingModule
  ]
})
export class RoomsPageModule { }
