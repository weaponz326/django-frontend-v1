import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsPageRoutingModule } from './assets-page-routing.module';
import { AssetsPageComponent } from './assets-page.component';


@NgModule({
  declarations: [
    AssetsPageComponent
  ],
  imports: [
    CommonModule,
    AssetsPageRoutingModule
  ]
})
export class AssetsPageModule { }
