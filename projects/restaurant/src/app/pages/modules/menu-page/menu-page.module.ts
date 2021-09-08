import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuPageRoutingModule } from './menu-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { MenuPageComponent } from './menu-page.component';


@NgModule({
  declarations: [
    MenuPageComponent
  ],
  imports: [
    CommonModule,
    MenuPageRoutingModule,
    MainNavbarModule,
  ]
})
export class MenuPageModule { }
