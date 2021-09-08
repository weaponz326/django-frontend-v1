import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsPageRoutingModule } from './assets-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { AssetsPageComponent } from './assets-page.component';


@NgModule({
  declarations: [
    AssetsPageComponent
  ],
  imports: [
    CommonModule,
    AssetsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class AssetsPageModule { }
