import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ]
})
export class YearModule { }
