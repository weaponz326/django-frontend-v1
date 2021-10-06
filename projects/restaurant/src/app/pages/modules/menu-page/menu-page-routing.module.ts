import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuPageComponent } from './menu-page.component';
import { DashboardComponent } from '../../../components/modules/menu/dashboard/dashboard.component';
import { AllMenuGroupsComponent } from '../../../components/modules/menu/all-menu-groups/all-menu-groups.component';
import { ViewMenuGroupComponent } from '../../../components/modules/menu/view-menu-group/view-menu-group.component';
import { AllMenuItemsComponent } from '../../../components/modules/menu/all-menu-items/all-menu-items.component';

const routes: Routes = [
  {
    path: "",
    component: MenuPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "all-menu-groups", component: AllMenuGroupsComponent },
      { path: "view-menu-group", component: ViewMenuGroupComponent },
      { path: "all-menu-items", component: AllMenuItemsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuPageRoutingModule { }
