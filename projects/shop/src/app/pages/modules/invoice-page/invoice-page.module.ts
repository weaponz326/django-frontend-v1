import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicePageRoutingModule } from './invoice-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { InvoicePageComponent } from './invoice-page.component';


@NgModule({
  declarations: [
    InvoicePageComponent
  ],
  imports: [
    CommonModule,
    InvoicePageRoutingModule,
    MainNavbarModule,
  ]
})
export class InvoicePageModule { }
