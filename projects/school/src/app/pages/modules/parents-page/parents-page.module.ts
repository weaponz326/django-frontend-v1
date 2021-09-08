import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentsPageRoutingModule } from './parents-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { ParentsPageComponent } from './parents-page.component';


@NgModule({
  declarations: [
    ParentsPageComponent
  ],
  imports: [
    CommonModule,
    ParentsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class ParentsPageModule { }
