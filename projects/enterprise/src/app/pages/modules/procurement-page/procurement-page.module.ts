import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcurementPageRoutingModule } from './procurement-page-routing.module';
import { ProcurementPageComponent } from './procurement-page.component';


@NgModule({
  declarations: [
    ProcurementPageComponent
  ],
  imports: [
    CommonModule,
    ProcurementPageRoutingModule
  ]
})
export class ProcurementPageModule { }
