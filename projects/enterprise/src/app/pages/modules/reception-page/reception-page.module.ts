import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionPageRoutingModule } from './reception-page-routing.module';
import { ReceptionPageComponent } from './reception-page.component';


@NgModule({
  declarations: [
    ReceptionPageComponent
  ],
  imports: [
    CommonModule,
    ReceptionPageRoutingModule
  ]
})
export class ReceptionPageModule { }
