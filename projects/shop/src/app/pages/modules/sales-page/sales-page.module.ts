import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesPageRoutingModule } from './sales-page-routing.module';
import { SalesPageComponent } from './sales-page.component';


@NgModule({
  declarations: [
    SalesPageComponent
  ],
  imports: [
    CommonModule,
    SalesPageRoutingModule
  ]
})
export class SalesPageModule { }
