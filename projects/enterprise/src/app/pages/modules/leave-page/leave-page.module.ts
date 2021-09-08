import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavePageRoutingModule } from './leave-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { LeavePageComponent } from './leave-page.component';


@NgModule({
  declarations: [
    LeavePageComponent
  ],
  imports: [
    CommonModule,
    LeavePageRoutingModule,
    MainNavbarModule,
  ]
})
export class LeavePageModule { }
