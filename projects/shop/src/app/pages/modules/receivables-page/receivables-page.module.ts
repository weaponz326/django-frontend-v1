import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceivablesPageRoutingModule } from './receivables-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { ReceivablesPageComponent } from './receivables-page.component';


@NgModule({
  declarations: [
    ReceivablesPageComponent
  ],
  imports: [
    CommonModule,
    ReceivablesPageRoutingModule,
    MainNavbarModule,
  ]
})
export class ReceivablesPageModule { }
