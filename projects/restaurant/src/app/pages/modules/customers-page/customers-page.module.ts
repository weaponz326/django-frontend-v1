import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersPageRoutingModule } from './customers-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { CustomersModule } from '../../../components/modules/customers/customers.module';

import { CustomersPageComponent } from './customers-page.component';


@NgModule({
  declarations: [
    CustomersPageComponent
  ],
  imports: [
    CommonModule,
    CustomersPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    CustomersModule,
  ]
})
export class CustomersPageModule { }
