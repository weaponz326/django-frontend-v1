import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ]
})
export class WorkersModule { }
