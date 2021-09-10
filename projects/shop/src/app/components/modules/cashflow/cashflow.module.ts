import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllSheetsComponent } from './all-sheets/all-sheets.component';
import { NewSheetComponent } from './new-sheet/new-sheet.component';
import { ViewSheetComponent } from './view-sheet/view-sheet.component';
import { AddInflowComponent } from './add-inflow/add-inflow.component';
import { AddOutflowComponent } from './add-outflow/add-outflow.component';
import { DailyComponent } from './sheet-types/daily/daily.component';
import { WeeklyComponent } from './sheet-types/weekly/weekly.component';
import { MonthlyComponent } from './sheet-types/monthly/monthly.component';
import { QuarterlyComponent } from './sheet-types/quarterly/quarterly.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllSheetsComponent,
    NewSheetComponent,
    ViewSheetComponent,
    AddInflowComponent,
    AddOutflowComponent,
    DailyComponent,
    WeeklyComponent,
    MonthlyComponent,
    QuarterlyComponent
  ],
  imports: [
    CommonModule,
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class CashflowModule { }
