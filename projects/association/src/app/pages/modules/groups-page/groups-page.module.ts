import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsPageRoutingModule } from './groups-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { GroupsPageComponent } from './groups-page.component';


@NgModule({
  declarations: [
    GroupsPageComponent
  ],
  imports: [
    CommonModule,
    GroupsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class GroupsPageModule { }
