import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ProductFormComponent } from './product-form/product-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllProductsComponent,
    NewProductComponent,
    ViewProductComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
