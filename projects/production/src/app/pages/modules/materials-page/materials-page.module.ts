import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsPageRoutingModule } from './materials-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { MaterialsPageComponent } from './materials-page.component';


@NgModule({
  declarations: [
    MaterialsPageComponent
  ],
  imports: [
    CommonModule,
    MaterialsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class MaterialsPageModule { }
