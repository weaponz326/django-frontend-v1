import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllReportsComponent } from './all-reports/all-reports.component';
import { NewReportComponent } from './new-report/new-report.component';
import { ClassReportComponent } from './class-report/class-report.component';
import { ClassSheetComponent } from './class-sheet/class-sheet.component';
import { StudentReportComponent } from './student-report/student-report.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllReportsComponent,
    NewReportComponent,
    ClassReportComponent,
    ClassSheetComponent,
    StudentReportComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReportsModule { }
