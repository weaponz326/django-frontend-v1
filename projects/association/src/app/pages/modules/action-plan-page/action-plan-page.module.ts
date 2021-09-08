import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionPlanPageRoutingModule } from './action-plan-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';

import { ActionPlanPageComponent } from './action-plan-page.component';


@NgModule({
  declarations: [
    ActionPlanPageComponent
  ],
  imports: [
    CommonModule,
    ActionPlanPageRoutingModule,
    MainNavbarModule,
  ]
})
export class ActionPlanPageModule { }
