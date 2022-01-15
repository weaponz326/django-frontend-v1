import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksPageComponent } from './tasks-page.component';
import { KanbanViewComponent } from '../../../components/modules/tasks/kanban-view/kanban-view.component';
import { ChecklistViewComponent } from '../../../components/modules/tasks/checklist-view/checklist-view.component';
import { DashboardComponent } from '../../../components/modules/tasks/dashboard/dashboard.component';
import { AllTaskGroupsComponent } from '../../../components/modules/tasks/all-task-groups/all-task-groups.component';
import { AllTaskItemsComponent } from '../../../components/modules/tasks/all-task-items/all-task-items.component';
import { ViewTaskGroupComponent } from '../../../components/modules/tasks/view-task-group/view-task-group.component';

import { ViewTaskGroupGuard } from '../../../guards/modules/tasks/view-task-group.guard';


const routes: Routes = [
  {
    path: "",
    component: TasksPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "all-task-groups", component: AllTaskGroupsComponent },
      {
        path: "view-task-group",
        component: ViewTaskGroupComponent,
        canActivate: [ViewTaskGroupGuard],
        children: [
          { path: "kanban-view", component: KanbanViewComponent },
          { path: "checklist-view", component: ChecklistViewComponent },
        ]
      },
      { path: "all-task-items", component: AllTaskItemsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksPageRoutingModule { }
