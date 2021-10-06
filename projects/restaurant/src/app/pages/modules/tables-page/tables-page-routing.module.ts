import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablesPageComponent } from './tables-page.component';
import { DashboardComponent } from '../../../components/modules/tables/dashboard/dashboard.component';
import { AllTablesComponent } from '../../../components/modules/tables/all-tables/all-tables.component';
import { AddTableComponent } from '../../../components/modules/tables/add-table/add-table.component';
import { ViewTableComponent } from '../../../components/modules/tables/view-table/view-table.component';


const routes: Routes = [
  {
    path: "",
    component: TablesPageComponent,
    children: [
      { path: "", component: AllTablesComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "all-tables", component: AllTablesComponent },
      { path: "add-table", component: AddTableComponent },
      { path: "view-table", component: ViewTableComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesPageRoutingModule { }
