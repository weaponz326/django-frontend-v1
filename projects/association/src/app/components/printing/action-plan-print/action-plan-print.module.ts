import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllActionPlanPrintComponent } from './all-action-plan-print/all-action-plan-print.component';
import { ViewActionPlanPrintComponent } from './view-action-plan-print/view-action-plan-print.component';



@NgModule({
  declarations: [
    AllActionPlanPrintComponent,
    ViewActionPlanPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ActionPlanPrintModule { }
