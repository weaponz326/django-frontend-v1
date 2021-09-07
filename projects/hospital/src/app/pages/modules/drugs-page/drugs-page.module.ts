import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrugsPageRoutingModule } from './drugs-page-routing.module';
import { DrugsPageComponent } from './drugs-page.component';


@NgModule({
  declarations: [
    DrugsPageComponent
  ],
  imports: [
    CommonModule,
    DrugsPageRoutingModule
  ]
})
export class DrugsPageModule { }
