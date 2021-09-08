import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsPageRoutingModule } from './students-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { StudentsPageComponent } from './students-page.component';


@NgModule({
  declarations: [
    StudentsPageComponent
  ],
  imports: [
    CommonModule,
    StudentsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class StudentsPageModule { }
