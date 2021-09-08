import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { MemberComponent } from './member/member.component';
import { CommitteeComponent } from './committee/committee.component';
import { DuesComponent } from './dues/dues.component';
import { ExecutiveComponent } from './executive/executive.component';
import { ActionPlanComponent } from './action-plan/action-plan.component';
import { BudgetComponent } from './budget/budget.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MeetingComponent } from './meeting/meeting.component';
import { GroupComponent } from './group/group.component';
import { YearComponent } from './year/year.component';



@NgModule({
  declarations: [
    AccountComponent,
    MemberComponent,
    CommitteeComponent,
    DuesComponent,
    ExecutiveComponent,
    ActionPlanComponent,
    BudgetComponent,
    AttendanceComponent,
    MeetingComponent,
    GroupComponent,
    YearComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccountComponent,
    MemberComponent,
    CommitteeComponent,
    DuesComponent,
    ExecutiveComponent,
    ActionPlanComponent,
    BudgetComponent,
    AttendanceComponent,
    MeetingComponent,
    GroupComponent,
    YearComponent
  ]
})
export class SelectWindowsModule { }
