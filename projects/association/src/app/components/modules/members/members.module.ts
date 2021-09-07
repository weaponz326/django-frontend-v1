import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllMembersComponent } from './all-members/all-members.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { MemberFormComponent } from './member-form/member-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllMembersComponent,
    NewMemberComponent,
    ViewMemberComponent,
    MemberFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MembersModule { }
