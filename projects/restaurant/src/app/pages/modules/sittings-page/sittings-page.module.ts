import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SittingsPageRoutingModule } from './sittings-page-routing.module';
import { SittingsPageComponent } from './sittings-page.component';


@NgModule({
  declarations: [
    SittingsPageComponent
  ],
  imports: [
    CommonModule,
    SittingsPageRoutingModule
  ]
})
export class SittingsPageModule { }
