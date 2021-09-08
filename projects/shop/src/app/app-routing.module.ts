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
        path: "receivables",
        loadChildren: () => import("./pages/modules/receivables-page/receivables-page.module").then(m => m.ReceivablesPageModule)
      },
      {
        path: "products",
        loadChildren: () => import("./pages/modules/products-page/products-page.module").then(m => m.ProductsPageModule)
      },
      {
        path: "invoice",
        loadChildren: () => import("./pages/modules/invoice-page/invoice-page.module").then(m => m.InvoicePageModule)
      },
      {
        path: "marketting",
        loadChildren: () => import("./pages/modules/marketting-page/marketting-page.module").then(m => m.MarkettingPageModule)
      },
      {
        path: "payables",
        loadChildren: () => import("./pages/modules/payables-page/payables-page.module").then(m => m.PayablesPageModule)
      },
      {
        path: "sales",
        loadChildren: () => import("./pages/modules/sales-page/sales-page.module").then(m => m.SalesPageModule)
      },
      {
        path: "customers",
        loadChildren: () => import("./pages/modules/customers-page/customers-page.module").then(m => m.CustomersPageModule)
      },
      {
        path: "payments",
        loadChildren: () => import("./pages/modules/payments-page/payments-page.module").then(m => m.PaymentsPageModule)
      },
      {
        path: "orders",
        loadChildren: () => import("./pages/modules/orders-page/orders-page.module").then(m => m.OrdersPageModule)
      },
      {
        path: "inventory",
        loadChildren: () => import("./pages/modules/inventory-page/inventory-page.module").then(m => m.InventoryPageModule)
      },
      {
        path: "suppliers",
        loadChildren: () => import("./pages/modules/suppliers-page/suppliers-page.module").then(m => m.SuppliersPageModule)
      },
      {
        path: "purchasing",
        loadChildren: () => import("./pages/modules/purchasing-page/purchasing-page.module").then(m => m.PurchasingPageModule)
      },
      {
        path: "cashflow",
        loadChildren: () => import("./pages/modules/cashflow-page/cashflow-page.module").then(m => m.CashflowPageModule)
      },
      {
        path: "staff",
        loadChildren: () => import("./pages/modules/staff-page/staff-page.module").then(m => m.StaffPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
