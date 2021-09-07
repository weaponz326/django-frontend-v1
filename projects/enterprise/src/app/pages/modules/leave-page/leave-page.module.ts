import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavePageRoutingModule } from './leave-page-routing.module';
import { LeavePageComponent } from './leave-page.component';


@NgModule({
  declarations: [
    LeavePageComponent
  ],
  imports: [
    CommonModule,
    LeavePageRoutingModule
  ]
})
export class LeavePageModule { }
