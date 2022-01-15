import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth/auth.guard';

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
    path: "auth",
    loadChildren: () => import("./pages/auth-page/auth-page.module").then(m => m.AuthPageModule)
  },
  {
    path: "home",
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren: () => import("./pages/home-page/home-page.module").then(m => m.HomePageModule)
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
        path: "calendar",
        loadChildren: () => import("./pages/modules/calendar-page/calendar-page.module").then(m => m.CalendarPageModule)
      },
      {
        path: "budget",
        loadChildren: () => import("./pages/modules/budget-page/budget-page.module").then(m => m.BudgetPageModule)
      },
      {
        path: "notes",
        loadChildren: () => import("./pages/modules/notes-page/notes-page.module").then(m => m.NotesPageModule)
      },
      {
        path: "accounts",
        loadChildren: () => import("./pages/modules/accounts-page/accounts-page.module").then(m => m.AccountsPageModule)
      },
      {
        path: "tasks",
        loadChildren: () => import("./pages/modules/tasks-page/tasks-page.module").then(m => m.TasksPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
