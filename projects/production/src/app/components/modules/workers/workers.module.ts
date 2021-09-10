import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllWorkersComponent } from './all-workers/all-workers.component';
import { NewWorkerComponent } from './new-worker/new-worker.component';
import { ViewWorkerComponent } from './view-worker/view-worker.component';
import { WorkerFormComponent } from './worker-form/worker-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllWorkersComponent,
    NewWorkerComponent,
    ViewWorkerComponent,
    WorkerFormComponent
  ],
  imports: [
    CommonModule,
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class WorkersModule { }
