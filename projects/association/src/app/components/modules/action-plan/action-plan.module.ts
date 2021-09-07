import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllPlansComponent } from './all-plans/all-plans.component';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { ViewPlanComponent } from './view-plan/view-plan.component';
import { PlanStepsComponent } from './plan-steps/plan-steps.component';
import { AddStepComponent } from './add-step/add-step.component';
import { EditStepComponent } from './edit-step/edit-step.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllPlansComponent,
    AddPlanComponent,
    ViewPlanComponent,
    PlanStepsComponent,
    AddStepComponent,
    EditStepComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ActionPlanModule { }
