import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersPageRoutingModule } from './teachers-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { TeachersPageComponent } from './teachers-page.component';


@NgModule({
  declarations: [
    TeachersPageComponent
  ],
  imports: [
    CommonModule,
    TeachersPageRoutingModule,
    MainNavbarModule,
  ]
})
export class TeachersPageModule { }
