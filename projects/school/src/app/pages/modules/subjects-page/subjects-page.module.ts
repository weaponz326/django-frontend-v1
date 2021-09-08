import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsPageRoutingModule } from './subjects-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { SubjectsPageComponent } from './subjects-page.component';


@NgModule({
  declarations: [
    SubjectsPageComponent
  ],
  imports: [
    CommonModule,
    SubjectsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class SubjectsPageModule { }
