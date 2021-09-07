import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicePageRoutingModule } from './invoice-page-routing.module';
import { InvoicePageComponent } from './invoice-page.component';


@NgModule({
  declarations: [
    InvoicePageComponent
  ],
  imports: [
    CommonModule,
    InvoicePageRoutingModule
  ]
})
export class InvoicePageModule { }
