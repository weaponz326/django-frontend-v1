import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesPageRoutingModule } from './sales-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { SalesPageComponent } from './sales-page.component';


@NgModule({
  declarations: [
    SalesPageComponent
  ],
  imports: [
    CommonModule,
    SalesPageRoutingModule,
    MainNavbarModule,
  ]
})
export class SalesPageModule { }
