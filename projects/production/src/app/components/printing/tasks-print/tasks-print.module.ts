import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTasksPrintComponent } from './all-tasks-print/all-tasks-print.component';
import { ViewTaskPrintComponent } from './view-task-print/view-task-print.component';
import { ChecklistViewPrintComponent } from './checklist-view-print/checklist-view-print.component';



@NgModule({
  declarations: [
    AllTasksPrintComponent,
    ViewTaskPrintComponent,
    ChecklistViewPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TasksPrintModule { }
