import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllAppraisalComponent } from './all-appraisal/all-appraisal.component';
import { NewAppraisalComponent } from './new-appraisal/new-appraisal.component';
import { ViewAppraisalComponent } from './view-appraisal/view-appraisal.component';
import { AppraisalFormComponent } from './appraisal-form/appraisal-form.component';
import { AppraisalEmployeesComponent } from './appraisal-employees/appraisal-employees.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllAppraisalComponent,
    NewAppraisalComponent,
    ViewAppraisalComponent,
    AppraisalFormComponent,
    AppraisalEmployeesComponent
  ],
  imports: [
    CommonModule,
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class AppraisalModule { }
