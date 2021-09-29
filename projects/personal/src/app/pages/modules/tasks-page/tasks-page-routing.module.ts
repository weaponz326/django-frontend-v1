import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksPageComponent } from './tasks-page.component';
import { KanbanViewComponent } from '../../../components/modules/tasks/kanban-view/kanban-view.component';
import { ChecklistViewComponent } from '../../../components/modules/tasks/checklist-view/checklist-view.component';
import { AllTasksComponent } from '../../../components/modules/tasks/all-tasks/all-tasks.component';
import { DashboardComponent } from '../../../components/modules/tasks/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: "",
    component: TasksPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "kanban-view", component: KanbanViewComponent },
      { path: "checklist-view", component: ChecklistViewComponent },
      { path: "all-tasks", component: AllTasksComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksPageRoutingModule { }
