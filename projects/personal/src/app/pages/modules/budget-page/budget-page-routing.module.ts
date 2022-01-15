import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BudgetPageComponent } from './budget-page.component';
import { AllBudgetComponent } from '../../../components/modules/budget/all-budget/all-budget.component';
import { ViewBudgetComponent } from '../../../components/modules/budget/view-budget/view-budget.component';
import { DashboardComponent } from '../../../components/modules/budget/dashboard/dashboard.component';

import { ViewBudgetGuard } from '../../../guards/modules/budget/view-budget.guard';


const routes: Routes = [
  {
    path: "",
    component: BudgetPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "all-budget", component: AllBudgetComponent },
      { path: "view-budget", component: ViewBudgetComponent, canActivate: [ViewBudgetGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetPageRoutingModule { }
