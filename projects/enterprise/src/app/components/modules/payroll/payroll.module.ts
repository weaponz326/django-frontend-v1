import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllPayrollComponent } from './all-payroll/all-payroll.component';
import { GeneratePayrollComponent } from './generate-payroll/generate-payroll.component';
import { ViewPayrollComponent } from './view-payroll/view-payroll.component';
import { PayrollSheetComponent } from './payroll-sheet/payroll-sheet.component';
import { EmployeePayrollComponent } from './employee-payroll/employee-payroll.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllPayrollComponent,
    GeneratePayrollComponent,
    ViewPayrollComponent,
    PayrollSheetComponent,
    EmployeePayrollComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PayrollModule { }
