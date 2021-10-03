import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPayrollPrintComponent } from './all-payroll-print/all-payroll-print.component';
import { FullPayrollPrintComponent } from './full-payroll-print/full-payroll-print.component';
import { EmployeePayrollPrintComponent } from './employee-payroll-print/employee-payroll-print.component';



@NgModule({
  declarations: [
    AllPayrollPrintComponent,
    FullPayrollPrintComponent,
    EmployeePayrollPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PayrollPrintModule { }
