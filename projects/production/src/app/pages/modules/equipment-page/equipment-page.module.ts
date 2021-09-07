import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentPageRoutingModule } from './equipment-page-routing.module';
import { EquipmentPageComponent } from './equipment-page.component';


@NgModule({
  declarations: [
    EquipmentPageComponent
  ],
  imports: [
    CommonModule,
    EquipmentPageRoutingModule
  ]
})
export class EquipmentPageModule { }
