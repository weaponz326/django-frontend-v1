import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceivablesPageRoutingModule } from './receivables-page-routing.module';
import { ReceivablesPageComponent } from './receivables-page.component';


@NgModule({
  declarations: [
    ReceivablesPageComponent
  ],
  imports: [
    CommonModule,
    ReceivablesPageRoutingModule
  ]
})
export class ReceivablesPageModule { }
