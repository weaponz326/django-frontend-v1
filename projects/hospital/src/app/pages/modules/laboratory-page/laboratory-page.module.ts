import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaboratoryPageRoutingModule } from './laboratory-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { LaboratoryPageComponent } from './laboratory-page.component';


@NgModule({
  declarations: [
    LaboratoryPageComponent
  ],
  imports: [
    CommonModule,
    LaboratoryPageRoutingModule,
    MainNavbarModule,
  ]
})
export class LaboratoryPageModule { }
