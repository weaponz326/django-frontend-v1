import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkettingPageRoutingModule } from './marketting-page-routing.module';
import { MarkettingPageComponent } from './marketting-page.component';


@NgModule({
  declarations: [
    MarkettingPageComponent
  ],
  imports: [
    CommonModule,
    MarkettingPageRoutingModule
  ]
})
export class MarkettingPageModule { }
