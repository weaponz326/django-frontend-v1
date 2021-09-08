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
        path: "bills",
        loadChildren: () => import("./pages/modules/bills-page/bills-page.module").then(m => m.BillsPageModule)
      },
      {
        path: "staff",
        loadChildren: () => import("./pages/modules/staff-page/staff-page.module").then(m => m.StaffPageModule)
      },
      {
        path: "roster",
        loadChildren: () => import("./pages/modules/roster-page/roster-page.module").then(m => m.RosterPageModule)
      },
      {
        path: "guests",
        loadChildren: () => import("./pages/modules/guests-page/guests-page.module").then(m => m.GuestsPageModule)
      },
      {
        path: "payments",
        loadChildren: () => import("./pages/modules/payments-page/payments-page.module").then(m => m.PaymentsPageModule)
      },
      {
        path: "services",
        loadChildren: () => import("./pages/modules/services-page/services-page.module").then(m => m.ServicesPageModule)
      },
      {
        path: "checkin",
        loadChildren: () => import("./pages/modules/checkin-page/checkin-page.module").then(m => m.CheckinPageModule)
      },
      {
        path: "bookings",
        loadChildren: () => import("./pages/modules/bookings-page/bookings-page.module").then(m => m.BookingsPageModule)
      },
      {
        path: "rooms",
        loadChildren: () => import("./pages/modules/rooms-page/rooms-page.module").then(m => m.RoomsPageModule)
      },
      {
        path: "assets",
        loadChildren: () => import("./pages/modules/assets-page/assets-page.module").then(m => m.AssetsPageModule)
      },
      {
        path: "housekeeping",
        loadChildren: () => import("./pages/modules/housekeeping-page/housekeeping-page.module").then(m => m.HousekeepingPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
