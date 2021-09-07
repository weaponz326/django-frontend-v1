import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffPageRoutingModule } from './staff-page-routing.module';
import { StaffPageComponent } from './staff-page.component';


@NgModule({
  declarations: [
    StaffPageComponent
  ],
  imports: [
    CommonModule,
    StaffPageRoutingModule
  ]
})
export class StaffPageModule { }
