import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsPageRoutingModule } from './sections-page-routing.module';
import { SectionsPageComponent } from './sections-page.component';


@NgModule({
  declarations: [
    SectionsPageComponent
  ],
  imports: [
    CommonModule,
    SectionsPageRoutingModule
  ]
})
export class SectionsPageModule { }
