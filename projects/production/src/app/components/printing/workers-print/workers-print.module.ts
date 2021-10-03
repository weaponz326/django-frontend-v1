import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllWorkersPrintComponent } from './all-workers-print/all-workers-print.component';
import { ViewWorkerPrintComponent } from './view-worker-print/view-worker-print.component';



@NgModule({
  declarations: [
    AllWorkersPrintComponent,
    ViewWorkerPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WorkersPrintModule { }
