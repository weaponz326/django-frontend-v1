import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsPageRoutingModule } from './patients-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { PatientsPageComponent } from './patients-page.component';


@NgModule({
  declarations: [
    PatientsPageComponent
  ],
  imports: [
    CommonModule,
    PatientsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class PatientsPageModule { }
