import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllEmployeesPrintComponent } from './all-employees-print/all-employees-print.component';
import { ViewEmployeePrintComponent } from './view-employee-print/view-employee-print.component';



@NgModule({
  declarations: [
    AllEmployeesPrintComponent,
    ViewEmployeePrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeesPrintModule { }
