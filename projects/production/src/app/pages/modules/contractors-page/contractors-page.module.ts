import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractorsPageRoutingModule } from './contractors-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { ContractorsPageComponent } from './contractors-page.component';


@NgModule({
  declarations: [
    ContractorsPageComponent
  ],
  imports: [
    CommonModule,
    ContractorsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class ContractorsPageModule { }
