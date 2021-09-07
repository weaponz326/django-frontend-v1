import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsPageRoutingModule } from './materials-page-routing.module';
import { MaterialsPageComponent } from './materials-page.component';


@NgModule({
  declarations: [
    MaterialsPageComponent
  ],
  imports: [
    CommonModule,
    MaterialsPageRoutingModule
  ]
})
export class MaterialsPageModule { }
