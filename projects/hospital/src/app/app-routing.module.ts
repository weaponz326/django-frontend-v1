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
        path: "patients",
        loadChildren: () => import("./pages/modules/patients-page/patients-page.module").then(m => m.PatientsPageModule)
      },
      {
        path: "appointments",
        loadChildren: () => import("./pages/modules/appointments-page/appointments-page.module").then(m => m.AppointmentsPageModule)
      },
      {
        path: "staff",
        loadChildren: () => import("./pages/modules/staff-page/staff-page.module").then(m => m.StaffPageModule)
      },
      {
        path: "bills",
        loadChildren: () => import("./pages/modules/bills-page/bills-page.module").then(m => m.BillsPageModule)
      },
      {
        path: "doctors",
        loadChildren: () => import("./pages/modules/doctors-page/doctors-page.module").then(m => m.DoctorsPageModule)
      },
      {
        path: "laboratory",
        loadChildren: () => import("./pages/modules/laboratory-page/laboratory-page.module").then(m => m.LaboratoryPageModule)
      },
      {
        path: "payments",
        loadChildren: () => import("./pages/modules/payments-page/payments-page.module").then(m => m.PaymentsPageModule)
      },
      {
        path: "nurses",
        loadChildren: () => import("./pages/modules/nurses-page/nurses-page.module").then(m => m.NursesPageModule)
      },
      {
        path: "prescriptions",
        loadChildren: () => import("./pages/modules/prescriptions-page/prescriptions-page.module").then(m => m.PrescriptionsPageModule)
      },
      {
        path: "diagnosis",
        loadChildren: () => import("./pages/modules/diagnosis-page/diagnosis-page.module").then(m => m.DiagnosisPageModule)
      },
      {
        path: "drugs",
        loadChildren: () => import("./pages/modules/drugs-page/drugs-page.module").then(m => m.DrugsPageModule)
      },
      {
        path: "wards",
        loadChildren: () => import("./pages/modules/wards-page/wards-page.module").then(m => m.WardsPageModule)
      },
      {
        path: "admissions",
        loadChildren: () => import("./pages/modules/admissions-page/admissions-page.module").then(m => m.AdmissionsPageModule)
      },
      {
        path: "dispensary",
        loadChildren: () => import("./pages/modules/dispensary-page/dispensary-page.module").then(m => m.DispensaryPageModule)
      },
      {
        path: "roster",
        loadChildren: () => import("./pages/modules/roster-page/roster-page.module").then(m => m.RosterPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
