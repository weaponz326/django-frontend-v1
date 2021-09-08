import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkettingPageRoutingModule } from './marketting-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { MarkettingPageComponent } from './marketting-page.component';


@NgModule({
  declarations: [
    MarkettingPageComponent
  ],
  imports: [
    CommonModule,
    MarkettingPageRoutingModule,
    MainNavbarModule,
  ]
})
export class MarkettingPageModule { }
