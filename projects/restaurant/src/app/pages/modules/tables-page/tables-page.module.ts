import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesPageRoutingModule } from './tables-page-routing.module';
import { TablesPageComponent } from './tables-page.component';


@NgModule({
  declarations: [
    TablesPageComponent
  ],
  imports: [
    CommonModule,
    TablesPageRoutingModule
  ]
})
export class TablesPageModule { }
