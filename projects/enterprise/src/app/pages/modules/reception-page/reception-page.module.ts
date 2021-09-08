import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionPageRoutingModule } from './reception-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { ReceptionPageComponent } from './reception-page.component';


@NgModule({
  declarations: [
    ReceptionPageComponent
  ],
  imports: [
    CommonModule,
    ReceptionPageRoutingModule,
    MainNavbarModule,
  ]
})
export class ReceptionPageModule { }
