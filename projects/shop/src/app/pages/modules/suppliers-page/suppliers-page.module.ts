import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersPageRoutingModule } from './suppliers-page-routing.module';
import { SuppliersPageComponent } from './suppliers-page.component';


@NgModule({
  declarations: [
    SuppliersPageComponent
  ],
  imports: [
    CommonModule,
    SuppliersPageRoutingModule
  ]
})
export class SuppliersPageModule { }
