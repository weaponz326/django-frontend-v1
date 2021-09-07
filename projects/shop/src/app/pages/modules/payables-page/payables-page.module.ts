import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayablesPageRoutingModule } from './payables-page-routing.module';
import { PayablesPageComponent } from './payables-page.component';


@NgModule({
  declarations: [
    PayablesPageComponent
  ],
  imports: [
    CommonModule,
    PayablesPageRoutingModule
  ]
})
export class PayablesPageModule { }
