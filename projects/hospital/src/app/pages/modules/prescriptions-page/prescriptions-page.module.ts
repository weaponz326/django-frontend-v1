import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionsPageRoutingModule } from './prescriptions-page-routing.module';
import { PrescriptionsPageComponent } from './prescriptions-page.component';


@NgModule({
  declarations: [
    PrescriptionsPageComponent
  ],
  imports: [
    CommonModule,
    PrescriptionsPageRoutingModule
  ]
})
export class PrescriptionsPageModule { }
