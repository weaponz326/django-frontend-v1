import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayablesPageRoutingModule } from './payables-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { PayablesPageComponent } from './payables-page.component';


@NgModule({
  declarations: [
    PayablesPageComponent
  ],
  imports: [
    CommonModule,
    PayablesPageRoutingModule,
    MainNavbarModule,
  ]
})
export class PayablesPageModule { }
