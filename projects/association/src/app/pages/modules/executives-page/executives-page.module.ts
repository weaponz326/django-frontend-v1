import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutivesPageRoutingModule } from './executives-page-routing.module';
import { ExecutivesPageComponent } from './executives-page.component';


@NgModule({
  declarations: [
    ExecutivesPageComponent
  ],
  imports: [
    CommonModule,
    ExecutivesPageRoutingModule
  ]
})
export class ExecutivesPageModule { }
