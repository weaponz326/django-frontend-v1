import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionsPageRoutingModule } from './admissions-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { AdmissionsPageComponent } from './admissions-page.component';


@NgModule({
  declarations: [
    AdmissionsPageComponent
  ],
  imports: [
    CommonModule,
    AdmissionsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class AdmissionsPageModule { }
