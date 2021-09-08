import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersPageRoutingModule } from './customers-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { CustomersPageComponent } from './customers-page.component';


@NgModule({
  declarations: [
    CustomersPageComponent
  ],
  imports: [
    CommonModule,
    CustomersPageRoutingModule,
    MainNavbarModule,
  ]
})
export class CustomersPageModule { }
