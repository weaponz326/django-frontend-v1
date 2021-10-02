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
        path: "payroll",
        loadChildren: () => import("./pages/modules/payroll-page/payroll-page.module").then(m => m.PayrollPageModule)
      },
      {
        path: "attendance",
        loadChildren: () => import("./pages/modules/attendance-page/attendance-page.module").then(m => m.AttendancePageModule)
      },
      {
        path: "assets",
        loadChildren: () => import("./pages/modules/assets-page/assets-page.module").then(m => m.AssetsPageModule)
      },
      {
        path: "leave",
        loadChildren: () => import("./pages/modules/leave-page/leave-page.module").then(m => m.LeavePageModule)
      },
      {
        path: "budget",
        loadChildren: () => import("./pages/modules/budget-page/budget-page.module").then(m => m.BudgetPageModule)
      },
      {
        path: "procurement",
        loadChildren: () => import("./pages/modules/procurement-page/procurement-page.module").then(m => m.ProcurementPageModule)
      },
      {
        path: "letters",
        loadChildren: () => import("./pages/modules/letters-page/letters-page.module").then(m => m.LettersPageModule)
      },
      {
        path: "appraisal",
        loadChildren: () => import("./pages/modules/appraisal-page/appraisal-page.module").then(m => m.AppraisalPageModule)
      },
      {
        path: "files",
        loadChildren: () => import("./pages/modules/files-page/files-page.module").then(m => m.FilesPageModule)
      },
      {
        path: "employees",
        loadChildren: () => import("./pages/modules/employees-page/employees-page.module").then(m => m.EmployeesPageModule)
      },
      {
        path: "ledger",
        loadChildren: () => import("./pages/modules/ledger-page/ledger-page.module").then(m => m.LedgerPageModule)
      },
      {
        path: "reception",
        loadChildren: () => import("./pages/modules/reception-page/reception-page.module").then(m => m.ReceptionPageModule)
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
