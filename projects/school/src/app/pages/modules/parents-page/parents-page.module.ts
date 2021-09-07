import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentsPageRoutingModule } from './parents-page-routing.module';
import { ParentsPageComponent } from './parents-page.component';


@NgModule({
  declarations: [
    ParentsPageComponent
  ],
  imports: [
    CommonModule,
    ParentsPageRoutingModule
  ]
})
export class ParentsPageModule { }
