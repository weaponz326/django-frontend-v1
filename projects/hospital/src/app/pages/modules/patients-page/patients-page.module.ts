import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsPageRoutingModule } from './patients-page-routing.module';
import { PatientsPageComponent } from './patients-page.component';


@NgModule({
  declarations: [
    PatientsPageComponent
  ],
  imports: [
    CommonModule,
    PatientsPageRoutingModule
  ]
})
export class PatientsPageModule { }
