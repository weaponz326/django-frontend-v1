import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractorsPageRoutingModule } from './contractors-page-routing.module';
import { ContractorsPageComponent } from './contractors-page.component';


@NgModule({
  declarations: [
    ContractorsPageComponent
  ],
  imports: [
    CommonModule,
    ContractorsPageRoutingModule
  ]
})
export class ContractorsPageModule { }
