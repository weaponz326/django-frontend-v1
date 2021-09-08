import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllTablesComponent } from './all-tables/all-tables.component';
import { AddTableComponent } from './add-table/add-table.component';
import { ViewTableComponent } from './view-table/view-table.component';
import { TableFormComponent } from './table-form/table-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllTablesComponent,
    AddTableComponent,
    ViewTableComponent,
    TableFormComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class TablesModule { }
