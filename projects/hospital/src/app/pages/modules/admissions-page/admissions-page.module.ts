import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionsPageRoutingModule } from './admissions-page-routing.module';
import { AdmissionsPageComponent } from './admissions-page.component';


@NgModule({
  declarations: [
    AdmissionsPageComponent
  ],
  imports: [
    CommonModule,
    AdmissionsPageRoutingModule
  ]
})
export class AdmissionsPageModule { }
