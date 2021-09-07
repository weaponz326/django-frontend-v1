import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersPageRoutingModule } from './customers-page-routing.module';
import { CustomersPageComponent } from './customers-page.component';


@NgModule({
  declarations: [
    CustomersPageComponent
  ],
  imports: [
    CommonModule,
    CustomersPageRoutingModule
  ]
})
export class CustomersPageModule { }
