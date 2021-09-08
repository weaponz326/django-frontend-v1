import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsPageRoutingModule } from './sections-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { SectionsPageComponent } from './sections-page.component';


@NgModule({
  declarations: [
    SectionsPageComponent
  ],
  imports: [
    CommonModule,
    SectionsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class SectionsPageModule { }
