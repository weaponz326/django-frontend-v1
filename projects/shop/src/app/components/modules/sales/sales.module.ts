import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

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
    CommonModule,
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class SalesModule { }
