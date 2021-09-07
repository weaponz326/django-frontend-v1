import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsPageRoutingModule } from './groups-page-routing.module';
import { GroupsPageComponent } from './groups-page.component';


@NgModule({
  declarations: [
    GroupsPageComponent
  ],
  imports: [
    CommonModule,
    GroupsPageRoutingModule
  ]
})
export class GroupsPageModule { }
