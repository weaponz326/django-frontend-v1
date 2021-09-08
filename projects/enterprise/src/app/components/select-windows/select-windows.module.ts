import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { PayrollComponent } from './payroll/payroll.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AssetComponent } from './asset/asset.component';
import { LeaveComponent } from './leave/leave.component';
import { BudgetComponent } from './budget/budget.component';
import { ProcurementComponent } from './procurement/procurement.component';
import { LettersComponent } from './letters/letters.component';
import { AppraisalComponent } from './appraisal/appraisal.component';
import { FileComponent } from './file/file.component';
import { EmployeeComponent } from './employee/employee.component';
import { LedgerComponent } from './ledger/ledger.component';
import { ReceptionComponent } from './reception/reception.component';



@NgModule({
  declarations: [
    AccountComponent,
    PayrollComponent,
    AttendanceComponent,
    AssetComponent,
    LeaveComponent,
    BudgetComponent,
    ProcurementComponent,
    LettersComponent,
    AppraisalComponent,
    FileComponent,
    EmployeeComponent,
    LedgerComponent,
    ReceptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccountComponent,
    PayrollComponent,
    AttendanceComponent,
    AssetComponent,
    LeaveComponent,
    BudgetComponent,
    ProcurementComponent,
    LettersComponent,
    AppraisalComponent,
    FileComponent,
    EmployeeComponent,
    LedgerComponent,
    ReceptionComponent
  ]
})
export class SelectWindowsModule { }
