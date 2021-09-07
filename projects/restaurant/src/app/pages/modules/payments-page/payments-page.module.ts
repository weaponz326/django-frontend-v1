import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsPageRoutingModule } from './payments-page-routing.module';
import { PaymentsPageComponent } from './payments-page.component';


@NgModule({
  declarations: [
    PaymentsPageComponent
  ],
  imports: [
    CommonModule,
    PaymentsPageRoutingModule
  ]
})
export class PaymentsPageModule { }
