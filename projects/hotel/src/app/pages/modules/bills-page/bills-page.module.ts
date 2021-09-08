import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillsPageRoutingModule } from './bills-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { BillsPageComponent } from './bills-page.component';


@NgModule({
  declarations: [
    BillsPageComponent
  ],
  imports: [
    CommonModule,
    BillsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class BillsPageModule { }
