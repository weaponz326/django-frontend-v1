import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsPageRoutingModule } from './doctors-page-routing.module';
import { DoctorsPageComponent } from './doctors-page.component';


@NgModule({
  declarations: [
    DoctorsPageComponent
  ],
  imports: [
    CommonModule,
    DoctorsPageRoutingModule
  ]
})
export class DoctorsPageModule { }
