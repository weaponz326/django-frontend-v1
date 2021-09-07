import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllEmployeesComponent,
    NewEmployeeComponent,
    ViewEmployeeComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
