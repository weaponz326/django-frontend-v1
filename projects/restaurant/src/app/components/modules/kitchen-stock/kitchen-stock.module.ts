import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { NumericTextBoxModule } from 'smart-webcomponents-angular/numerictextbox';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllStockItemsComponent } from './all-stock-items/all-stock-items.component';
import { AddStockItemComponent } from './add-stock-item/add-stock-item.component';
import { EditStockItemComponent } from './edit-stock-item/edit-stock-item.component';
import { StockItemFormComponent } from './stock-item-form/stock-item-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllStockItemsComponent,
    AddStockItemComponent,
    EditStockItemComponent,
    StockItemFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    GridModule,
    ButtonModule,
    InputModule,
    NumericTextBoxModule,
    ModuleUtilitiesModule,
  ]
})
export class KitchenStockModule { }
