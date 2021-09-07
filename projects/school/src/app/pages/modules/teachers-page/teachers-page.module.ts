import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersPageRoutingModule } from './teachers-page-routing.module';
import { TeachersPageComponent } from './teachers-page.component';


@NgModule({
  declarations: [
    TeachersPageComponent
  ],
  imports: [
    CommonModule,
    TeachersPageRoutingModule
  ]
})
export class TeachersPageModule { }
