import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsPageRoutingModule } from './subjects-page-routing.module';
import { SubjectsPageComponent } from './subjects-page.component';


@NgModule({
  declarations: [
    SubjectsPageComponent
  ],
  imports: [
    CommonModule,
    SubjectsPageRoutingModule
  ]
})
export class SubjectsPageModule { }
