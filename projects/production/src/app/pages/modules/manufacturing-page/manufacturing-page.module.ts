import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturingPageRoutingModule } from './manufacturing-page-routing.module';
import { ManufacturingPageComponent } from './manufacturing-page.component';


@NgModule({
  declarations: [
    ManufacturingPageComponent
  ],
  imports: [
    CommonModule,
    ManufacturingPageRoutingModule
  ]
})
export class ManufacturingPageModule { }
