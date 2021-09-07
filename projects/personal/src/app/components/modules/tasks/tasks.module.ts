import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { KanbanViewComponent } from './kanban-view/kanban-view.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskFormComponent } from './task-form/task-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllTasksComponent,
    KanbanViewComponent,
    AddTaskComponent,
    EditTaskComponent,
    TaskFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TasksModule { }
