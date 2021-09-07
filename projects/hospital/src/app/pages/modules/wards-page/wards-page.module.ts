import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WardsPageRoutingModule } from './wards-page-routing.module';
import { WardsPageComponent } from './wards-page.component';


@NgModule({
  declarations: [
    WardsPageComponent
  ],
  imports: [
    CommonModule,
    WardsPageRoutingModule
  ]
})
export class WardsPageModule { }
