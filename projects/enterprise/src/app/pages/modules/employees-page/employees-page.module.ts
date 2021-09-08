import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesPageRoutingModule } from './employees-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { EmployeesPageComponent } from './employees-page.component';


@NgModule({
  declarations: [
    EmployeesPageComponent
  ],
  imports: [
    CommonModule,
    EmployeesPageRoutingModule,
    MainNavbarModule,
  ]
})
export class EmployeesPageModule { }
