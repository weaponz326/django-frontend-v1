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
        path: "menu",
        loadChildren: () => import("./pages/modules/menu-page/menu-page.module").then(m => m.MenuPageModule)
      },
      {
        path: "staff",
        loadChildren: () => import("./pages/modules/staff-page/staff-page.module").then(m => m.StaffPageModule)
      },
      {
        path: "tables",
        loadChildren: () => import("./pages/modules/tables-page/tables-page.module").then(m => m.TablesPageModule)
      },
      {
        path: "customers",
        loadChildren: () => import("./pages/modules/customers-page/customers-page.module").then(m => m.CustomersPageModule)
      },
      {
        path: "deliveries",
        loadChildren: () => import("./pages/modules/deliveries-page/deliveries-page.module").then(m => m.DeliveriesPageModule)
      },
      {
        path: "payments",
        loadChildren: () => import("./pages/modules/payments-page/payments-page.module").then(m => m.PaymentsPageModule)
      },
      {
        path: "roster",
        loadChildren: () => import("./pages/modules/roster-page/roster-page.module").then(m => m.RosterPageModule)
      },
      {
        path: "reservations",
        loadChildren: () => import("./pages/modules/reservations-page/reservations-page.module").then(m => m.ReservationsPageModule)
      },
      {
        path: "orders",
        loadChildren: () => import("./pages/modules/orders-page/orders-page.module").then(m => m.OrdersPageModule)
      },
      {
        path: "kitchen-stock",
        loadChildren: () => import("./pages/modules/kitchen-stock-page/kitchen-stock-page.module").then(m => m.KitchenStockPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
