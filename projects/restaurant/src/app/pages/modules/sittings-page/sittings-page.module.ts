import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SittingsPageRoutingModule } from './sittings-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { SittingsPageComponent } from './sittings-page.component';


@NgModule({
  declarations: [
    SittingsPageComponent
  ],
  imports: [
    CommonModule,
    SittingsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class SittingsPageModule { }
