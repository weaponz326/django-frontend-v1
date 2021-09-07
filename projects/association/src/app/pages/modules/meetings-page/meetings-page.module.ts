import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsPageRoutingModule } from './meetings-page-routing.module';
import { MeetingsPageComponent } from './meetings-page.component';


@NgModule({
  declarations: [
    MeetingsPageComponent
  ],
  imports: [
    CommonModule,
    MeetingsPageRoutingModule
  ]
})
export class MeetingsPageModule { }
