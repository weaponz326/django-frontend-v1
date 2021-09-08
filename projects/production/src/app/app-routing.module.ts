import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./pages/guest-landing-page/guest-landing-page.module").then(m => m.GuestLandingPageModule)
  },
  {
    path: "guest",
    loadChildren: () => import("./pages/guest-landing-page/guest-landing-page.module").then(m => m.GuestLandingPageModule)
  },
  {
    path: "user",
    loadChildren: () => import("./pages/user-landing-page/user-landing-page.module").then(m => m.UserLandingPageModule)
  },
  {
    path: "auth",
    loadChildren: () => import("projects/personal/src/app/pages/auth-page/auth-page.module").then(m => m.AuthPageModule)
  },
  {
    path: "register",
    loadChildren: () => import("./pages/register-page/register-page.module").then(m => m.RegisterPageModule)
  },
  {
    path: "home",
    children: [
      {
        path: "",
        loadChildren: () => import("./pages/home-page/home-page.module").then(m => m.HomePageModule)
      },
      {
        path: "admin",
        loadChildren: () => import("./pages/modules/admin-page/admin-page.module").then(m => m.AdminPageModule)
      },
      {
        path: "portal",
        loadChildren: () => import("./pages/modules/portal-page/portal-page.module").then(m => m.PortalPageModule)
      },
      {
        path: "settings",
        loadChildren: () => import("./pages/modules/settings-page/settings-page.module").then(m => m.SettingsPageModule)
      },
      {
        path: "stock",
        loadChildren: () => import("./pages/modules/stock-page/stock-page.module").then(m => m.StockPageModule)
      },
      {
        path: "equipment",
        loadChildren: () => import("./pages/modules/equipment-page/equipment-page.module").then(m => m.EquipmentPageModule)
      },
      {
        path: "purchasing",
        loadChildren: () => import("./pages/modules/purchasing-page/purchasing-page.module").then(m => m.PurchasingPageModule)
      },
      {
        path: "orders",
        loadChildren: () => import("./pages/modules/orders-page/orders-page.module").then(m => m.OrdersPageModule)
      },
      {
        path: "manufacturing",
        loadChildren: () => import("./pages/modules/manufacturing-page/manufacturing-page.module").then(m => m.ManufacturingPageModule)
      },
      {
        path: "contractors",
        loadChildren: () => import("./pages/modules/contractors-page/contractors-page.module").then(m => m.ContractorsPageModule)
      },
      {
        path: "projects",
        loadChildren: () => import("./pages/modules/projects-page/projects-page.module").then(m => m.ProjectsPageModule)
      },
      {
        path: "workers",
        loadChildren: () => import("./pages/modules/workers-page/workers-page.module").then(m => m.WorkersPageModule)
      },
      {
        path: "tasks",
        loadChildren: () => import("./pages/modules/tasks-page/tasks-page.module").then(m => m.TasksPageModule)
      },
      {
        path: "roster",
        loadChildren: () => import("./pages/modules/roster-page/roster-page.module").then(m => m.RosterPageModule)
      },
      {
        path: "materials",
        loadChildren: () => import("./pages/modules/materials-page/materials-page.module").then(m => m.MaterialsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
