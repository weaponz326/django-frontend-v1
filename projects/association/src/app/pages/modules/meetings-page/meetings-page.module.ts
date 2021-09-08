import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsPageRoutingModule } from './meetings-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { MeetingsPageComponent } from './meetings-page.component';


@NgModule({
  declarations: [
    MeetingsPageComponent
  ],
  imports: [
    CommonModule,
    MeetingsPageRoutingModule,
    MainNavbarModule,
  ]
})
export class MeetingsPageModule { }
