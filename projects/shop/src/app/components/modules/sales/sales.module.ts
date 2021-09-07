import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllSalesComponent } from './all-sales/all-sales.component';
import { AddSalesComponent } from './add-sales/add-sales.component';
import { EditSalesComponent } from './edit-sales/edit-sales.component';
import { SalesFormComponent } from './sales-form/sales-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllSalesComponent,
    AddSalesComponent,
    EditSalesComponent,
    SalesFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SalesModule { }
