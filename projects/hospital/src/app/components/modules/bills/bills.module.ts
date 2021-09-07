import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllBillsComponent } from './all-bills/all-bills.component';
import { NewBillComponent } from './new-bill/new-bill.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { BillTablesComponent } from './bill-tables/bill-tables.component';
import { GeneralItemsComponent } from './general-items/general-items.component';
import { AddGeneralComponent } from './add-general/add-general.component';
import { AddExtraComponent } from './add-extra/add-extra.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllBillsComponent,
    NewBillComponent,
    ViewBillComponent,
    BillTablesComponent,
    GeneralItemsComponent,
    AddGeneralComponent,
    AddExtraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BillsModule { }
