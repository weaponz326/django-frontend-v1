import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffPageRoutingModule } from './staff-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { StaffPageComponent } from './staff-page.component';


@NgModule({
  declarations: [
    StaffPageComponent
  ],
  imports: [
    CommonModule,
    StaffPageRoutingModule,
    MainNavbarModule,
  ]
})
export class StaffPageModule { }
