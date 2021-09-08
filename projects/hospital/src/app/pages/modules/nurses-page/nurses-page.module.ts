import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NursesPageRoutingModule } from './nurses-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { NursesPageComponent } from './nurses-page.component';


@NgModule({
  declarations: [
    NursesPageComponent
  ],
  imports: [
    CommonModule,
    NursesPageRoutingModule,
    MainNavbarModule,
  ]
})
export class NursesPageModule { }
