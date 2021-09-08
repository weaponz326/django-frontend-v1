import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersPageRoutingModule } from './workers-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { WorkersPageComponent } from './workers-page.component';


@NgModule({
  declarations: [
    WorkersPageComponent
  ],
  imports: [
    CommonModule,
    WorkersPageRoutingModule,
    MainNavbarModule,
  ]
})
export class WorkersPageModule { }
