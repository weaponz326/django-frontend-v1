import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrugsPageRoutingModule } from './drugs-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { DrugsPageComponent } from './drugs-page.component';


@NgModule({
  declarations: [
    DrugsPageComponent
  ],
  imports: [
    CommonModule,
    DrugsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class DrugsPageModule { }
