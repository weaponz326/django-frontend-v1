import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollPageRoutingModule } from './payroll-page-routing.module';
import { PayrollPageComponent } from './payroll-page.component';


@NgModule({
  declarations: [
    PayrollPageComponent
  ],
  imports: [
    CommonModule,
    PayrollPageRoutingModule
  ]
})
export class PayrollPageModule { }
