import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillsPageRoutingModule } from './bills-page-routing.module';
import { BillsPageComponent } from './bills-page.component';


@NgModule({
  declarations: [
    BillsPageComponent
  ],
  imports: [
    CommonModule,
    BillsPageRoutingModule
  ]
})
export class BillsPageModule { }
