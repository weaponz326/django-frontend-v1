import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { KanbanModule } from 'smart-webcomponents-angular/kanban';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { TreeModule } from 'smart-webcomponents-angular/tree';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { KanbanViewComponent } from './kanban-view/kanban-view.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { ChecklistViewComponent } from './checklist-view/checklist-view.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllTasksComponent,
    KanbanViewComponent,
    AddTaskComponent,
    EditTaskComponent,
    TaskFormComponent,
    ChecklistViewComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    KanbanModule,
    GridModule,
    TreeModule,
    ModuleUtilitiesModule,
  ]
})
export class TasksModule { }
