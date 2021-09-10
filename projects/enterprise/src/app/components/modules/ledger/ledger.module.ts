import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllLedgerComponent } from './all-ledger/all-ledger.component';
import { NewLedgerComponent } from './new-ledger/new-ledger.component';
import { ViewLedgerComponent } from './view-ledger/view-ledger.component';
import { LedgerTableComponent } from './ledger-table/ledger-table.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemFormComponent } from './item-form/item-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllLedgerComponent,
    NewLedgerComponent,
    ViewLedgerComponent,
    LedgerTableComponent,
    AddItemComponent,
    EditItemComponent,
    ItemFormComponent
  ],
  imports: [
    CommonModule,
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class LedgerModule { }
