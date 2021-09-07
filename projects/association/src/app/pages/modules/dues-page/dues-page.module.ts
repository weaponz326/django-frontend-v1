import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuesPageRoutingModule } from './dues-page-routing.module';
import { DuesPageComponent } from './dues-page.component';


@NgModule({
  declarations: [
    DuesPageComponent
  ],
  imports: [
    CommonModule,
    DuesPageRoutingModule
  ]
})
export class DuesPageModule { }
