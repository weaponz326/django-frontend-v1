import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllYearsComponent } from './all-years/all-years.component';
import { AddYearComponent } from './add-year/add-year.component';
import { ViewYearComponent } from './view-year/view-year.component';
import { YearFormComponent } from './year-form/year-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllYearsComponent,
    AddYearComponent,
    ViewYearComponent,
    YearFormComponent
  ],
  imports: [
    CommonModule,
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class YearModule { }
