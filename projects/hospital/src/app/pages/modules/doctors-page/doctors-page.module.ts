import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsPageRoutingModule } from './doctors-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { DoctorsPageComponent } from './doctors-page.component';


@NgModule({
  declarations: [
    DoctorsPageComponent
  ],
  imports: [
    CommonModule,
    DoctorsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class DoctorsPageModule { }
