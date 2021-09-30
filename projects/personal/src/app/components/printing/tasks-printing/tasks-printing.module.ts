import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintAllTasksComponent } from './print-all-tasks/print-all-tasks.component';
import { PrintChecklistViewComponent } from './print-checklist-view/print-checklist-view.component';



@NgModule({
  declarations: [
    PrintAllTasksComponent,
    PrintChecklistViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TasksPrintingModule { }
