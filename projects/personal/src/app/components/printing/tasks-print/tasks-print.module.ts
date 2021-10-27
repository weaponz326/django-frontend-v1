import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllTaskGroupsPrintComponent } from './all-task-groups-print/all-task-groups-print.component';
import { AllTaskItemsPrintComponent } from './all-task-items-print/all-task-items-print.component';
import { ViewTaskGroupPrintComponent } from './view-task-group-print/view-task-group-print.component';



@NgModule({
  declarations: [
    AllTaskGroupsPrintComponent,
    AllTaskItemsPrintComponent,
    ViewTaskGroupPrintComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AllTaskGroupsPrintComponent,
    AllTaskItemsPrintComponent,
    ViewTaskGroupPrintComponent
  ]
})
export class TasksPrintModule { }
