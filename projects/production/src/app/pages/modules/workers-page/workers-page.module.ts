import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersPageRoutingModule } from './workers-page-routing.module';
import { WorkersPageComponent } from './workers-page.component';


@NgModule({
  declarations: [
    WorkersPageComponent
  ],
  imports: [
    CommonModule,
    WorkersPageRoutingModule
  ]
})
export class WorkersPageModule { }
