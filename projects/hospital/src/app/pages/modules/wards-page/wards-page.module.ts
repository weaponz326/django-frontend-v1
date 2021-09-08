import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WardsPageRoutingModule } from './wards-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { WardsPageComponent } from './wards-page.component';


@NgModule({
  declarations: [
    WardsPageComponent
  ],
  imports: [
    CommonModule,
    WardsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class WardsPageModule { }
