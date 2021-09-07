import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllSuppliersComponent } from './all-suppliers/all-suppliers.component';
import { NewSupplierComponent } from './new-supplier/new-supplier.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { SupplierProductsComponent } from './supplier-products/supplier-products.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllSuppliersComponent,
    NewSupplierComponent,
    ViewSupplierComponent,
    SupplierFormComponent,
    SupplierProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SuppliersModule { }
