import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllStockComponent } from './all-stock/all-stock.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { StockFormComponent } from './stock-form/stock-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllStockComponent,
    AddStockComponent,
    EditStockComponent,
    StockFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StockModule { }
