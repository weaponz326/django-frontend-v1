import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaboratoryPageRoutingModule } from './laboratory-page-routing.module';
import { LaboratoryPageComponent } from './laboratory-page.component';


@NgModule({
  declarations: [
    LaboratoryPageComponent
  ],
  imports: [
    CommonModule,
    LaboratoryPageRoutingModule
  ]
})
export class LaboratoryPageModule { }
