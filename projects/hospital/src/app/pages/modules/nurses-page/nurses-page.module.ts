import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NursesPageRoutingModule } from './nurses-page-routing.module';
import { NursesPageComponent } from './nurses-page.component';


@NgModule({
  declarations: [
    NursesPageComponent
  ],
  imports: [
    CommonModule,
    NursesPageRoutingModule
  ]
})
export class NursesPageModule { }
