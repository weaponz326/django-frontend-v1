import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllCommitteesComponent } from './all-committees/all-committees.component';
import { NewCommitteeComponent } from './new-committee/new-committee.component';
import { ViewCommitteeComponent } from './view-committee/view-committee.component';
import { CommitteeFormComponent } from './committee-form/committee-form.component';
import { CommitteeMembersComponent } from './committee-members/committee-members.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllCommitteesComponent,
    NewCommitteeComponent,
    ViewCommitteeComponent,
    CommitteeFormComponent,
    CommitteeMembersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommitteesModule { }
