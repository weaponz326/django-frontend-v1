import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutivesPageRoutingModule } from './executives-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { ExecutivesPageComponent } from './executives-page.component';


@NgModule({
  declarations: [
    ExecutivesPageComponent
  ],
  imports: [
    CommonModule,
    ExecutivesPageRoutingModule,
    MainNavbarModule,
  ]
})
export class ExecutivesPageModule { }
