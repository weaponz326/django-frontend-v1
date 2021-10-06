import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { NumericTextBoxModule } from 'smart-webcomponents-angular/numerictextbox';

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
    RouterModule,
    ChartsModule,
    GridModule,
    ButtonModule,
    InputModule,
    DropDownListModule,
    NumericTextBoxModule,
    ModuleUtilitiesModule,
  ]
})
export class TablesModule { }
