import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispensaryPageRoutingModule } from './dispensary-page-routing.module';
import { DispensaryPageComponent } from './dispensary-page.component';


@NgModule({
  declarations: [
    DispensaryPageComponent
  ],
  imports: [
    CommonModule,
    DispensaryPageRoutingModule
  ]
})
export class DispensaryPageModule { }
