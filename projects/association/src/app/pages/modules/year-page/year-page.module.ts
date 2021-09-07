import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YearPageRoutingModule } from './year-page-routing.module';
import { YearPageComponent } from './year-page.component';


@NgModule({
  declarations: [
    YearPageComponent
  ],
  imports: [
    CommonModule,
    YearPageRoutingModule
  ]
})
export class YearPageModule { }
