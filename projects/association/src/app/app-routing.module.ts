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
        path: "accounts",
        loadChildren: () => import("./pages/modules/accounts-page/accounts-page.module").then(m => m.AccountsPageModule)
      },
      {
        path: "members",
        loadChildren: () => import("./pages/modules/members-page/members-page.module").then(m => m.MembersPageModule)
      },
      {
        path: "committees",
        loadChildren: () => import("./pages/modules/committees-page/committees-page.module").then(m => m.CommitteesPageModule)
      },
      {
        path: "dues",
        loadChildren: () => import("./pages/modules/dues-page/dues-page.module").then(m => m.DuesPageModule)
      },
      {
        path: "executives",
        loadChildren: () => import("./pages/modules/executives-page/executives-page.module").then(m => m.ExecutivesPageModule)
      },
      {
        path: "action-plan",
        loadChildren: () => import("./pages/modules/action-plan-page/action-plan-page.module").then(m => m.ActionPlanPageModule)
      },
      {
        path: "attendance",
        loadChildren: () => import("./pages/modules/attendance-page/attendance-page.module").then(m => m.AttendancePageModule)
      },
      {
        path: "meetings",
        loadChildren: () => import("./pages/modules/meetings-page/meetings-page.module").then(m => m.MeetingsPageModule)
      },
      {
        path: "groups",
        loadChildren: () => import("./pages/modules/groups-page/groups-page.module").then(m => m.GroupsPageModule)
      },
      {
        path: "year",
        loadChildren: () => import("./pages/modules/year-page/year-page.module").then(m => m.YearPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
