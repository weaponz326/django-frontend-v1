import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersPageRoutingModule } from './members-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { MembersPageComponent } from './members-page.component';


@NgModule({
  declarations: [
    MembersPageComponent
  ],
  imports: [
    CommonModule,
    MembersPageRoutingModule,
    MainNavbarModule,
  ]
})
export class MembersPageModule { }
