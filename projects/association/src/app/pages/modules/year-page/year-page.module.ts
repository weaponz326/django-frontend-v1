import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YearPageRoutingModule } from './year-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { YearPageComponent } from './year-page.component';


@NgModule({
  declarations: [
    YearPageComponent
  ],
  imports: [
    CommonModule,
    YearPageRoutingModule,
    MainNavbarModule,
  ]
})
export class YearPageModule { }
