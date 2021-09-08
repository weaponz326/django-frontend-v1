import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesPageRoutingModule } from './tables-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { TablesPageComponent } from './tables-page.component';


@NgModule({
  declarations: [
    TablesPageComponent
  ],
  imports: [
    CommonModule,
    TablesPageRoutingModule,
    MainNavbarModule,
  ]
})
export class TablesPageModule { }
