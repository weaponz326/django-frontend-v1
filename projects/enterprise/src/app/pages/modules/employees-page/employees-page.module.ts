import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesPageRoutingModule } from './employees-page-routing.module';
import { EmployeesPageComponent } from './employees-page.component';


@NgModule({
  declarations: [
    EmployeesPageComponent
  ],
  imports: [
    CommonModule,
    EmployeesPageRoutingModule
  ]
})
export class EmployeesPageModule { }
