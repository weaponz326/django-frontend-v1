import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollPageRoutingModule } from './payroll-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { PayrollPageComponent } from './payroll-page.component';


@NgModule({
  declarations: [
    PayrollPageComponent
  ],
  imports: [
    CommonModule,
    PayrollPageRoutingModule,
    MainNavbarModule,
  ]
})
export class PayrollPageModule { }
