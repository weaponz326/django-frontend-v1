import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionPlanPageRoutingModule } from './action-plan-page-routing.module';
import { ActionPlanPageComponent } from './action-plan-page.component';


@NgModule({
  declarations: [
    ActionPlanPageComponent
  ],
  imports: [
    CommonModule,
    ActionPlanPageRoutingModule
  ]
})
export class ActionPlanPageModule { }
