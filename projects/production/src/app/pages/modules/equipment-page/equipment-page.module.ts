import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentPageRoutingModule } from './equipment-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { EquipmentPageComponent } from './equipment-page.component';


@NgModule({
  declarations: [
    EquipmentPageComponent
  ],
  imports: [
    CommonModule,
    EquipmentPageRoutingModule,
    MainNavbarModule,
  ]
})
export class EquipmentPageModule { }
