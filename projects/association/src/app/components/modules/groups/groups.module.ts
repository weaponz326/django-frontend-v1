import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllGroupsComponent } from './all-groups/all-groups.component';
import { NewGroupComponent } from './new-group/new-group.component';
import { ViewGroupComponent } from './view-group/view-group.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { GroupMembersComponent } from './group-members/group-members.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllGroupsComponent,
    NewGroupComponent,
    ViewGroupComponent,
    GroupFormComponent,
    GroupMembersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GroupsModule { }
