import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';
import { KanbanModule } from 'smart-webcomponents-angular/kanban';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { TreeModule } from 'smart-webcomponents-angular/tree';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';
import { TasksPrintModule } from '../../printing/tasks-print/tasks-print.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { KanbanViewComponent } from './kanban-view/kanban-view.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { ChecklistViewComponent } from './checklist-view/checklist-view.component';
import { AllTaskGroupsComponent } from './all-task-groups/all-task-groups.component';
import { AllTaskItemsComponent } from './all-task-items/all-task-items.component';
import { NewTaskGroupComponent } from './new-task-group/new-task-group.component';
import { ViewTaskGroupComponent } from './view-task-group/view-task-group.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    KanbanViewComponent,
    AddTaskComponent,
    EditTaskComponent,
    TaskFormComponent,
    ChecklistViewComponent,
    AllTaskGroupsComponent,
    AllTaskItemsComponent,
    NewTaskGroupComponent,
    ViewTaskGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    KanbanModule,
    GridModule,
    TreeModule,
    ButtonModule,
    InputModule,
    ModuleUtilitiesModule,
    TasksPrintModule,
  ]
})
export class TasksModule { }
