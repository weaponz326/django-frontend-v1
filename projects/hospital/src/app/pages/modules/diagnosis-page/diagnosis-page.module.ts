import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiagnosisPageRoutingModule } from './diagnosis-page-routing.module';
import { DiagnosisPageComponent } from './diagnosis-page.component';


@NgModule({
  declarations: [
    DiagnosisPageComponent
  ],
  imports: [
    CommonModule,
    DiagnosisPageRoutingModule
  ]
})
export class DiagnosisPageModule { }
