import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesPageRoutingModule } from './classes-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { ClassesPageComponent } from './classes-page.component';


@NgModule({
  declarations: [
    ClassesPageComponent
  ],
  imports: [
    CommonModule,
    ClassesPageRoutingModule,
    MainNavbarModule,
  ]
})
export class ClassesPageModule { }
