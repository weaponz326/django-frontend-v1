import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsPageRoutingModule } from './rooms-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { RoomsPageComponent } from './rooms-page.component';


@NgModule({
  declarations: [
    RoomsPageComponent
  ],
  imports: [
    CommonModule,
    RoomsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class RoomsPageModule { }
