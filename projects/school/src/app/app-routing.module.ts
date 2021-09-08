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
        path: "parents",
        loadChildren: () => import("./pages/modules/parents-page/parents-page.module").then(m => m.ParentsPageModule)
      },
      {
        path: "assessment",
        loadChildren: () => import("./pages/modules/assessment-page/assessment-page.module").then(m => m.AssessmentPageModule)
      },
      {
        path: "subjects",
        loadChildren: () => import("./pages/modules/subjects-page/subjects-page.module").then(m => m.SubjectsPageModule)
      },
      {
        path: "attendance",
        loadChildren: () => import("./pages/modules/attendance-page/attendance-page.module").then(m => m.AttendancePageModule)
      },
      {
        path: "students",
        loadChildren: () => import("./pages/modules/students-page/students-page.module").then(m => m.StudentsPageModule)
      },
      {
        path: "reports",
        loadChildren: () => import("./pages/modules/reports-page/reports-page.module").then(m => m.ReportsPageModule)
      },
      {
        path: "teachers",
        loadChildren: () => import("./pages/modules/teachers-page/teachers-page.module").then(m => m.TeachersPageModule)
      },
      {
        path: "staff",
        loadChildren: () => import("./pages/modules/staff-page/staff-page.module").then(m => m.StaffPageModule)
      },
      {
        path: "payments",
        loadChildren: () => import("./pages/modules/payments-page/payments-page.module").then(m => m.PaymentsPageModule)
      },
      {
        path: "classes",
        loadChildren: () => import("./pages/modules/classes-page/classes-page.module").then(m => m.ClassesPageModule)
      },
      {
        path: "timetable",
        loadChildren: () => import("./pages/modules/timetable-page/timetable-page.module").then(m => m.TimetablePageModule)
      },
      {
        path: "fees",
        loadChildren: () => import("./pages/modules/fees-page/fees-page.module").then(m => m.FeesPageModule)
      },
      {
        path: "sections",
        loadChildren: () => import("./pages/modules/sections-page/sections-page.module").then(m => m.SectionsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
