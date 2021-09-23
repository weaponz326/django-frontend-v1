import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { CheckBoxModule } from 'smart-webcomponents-angular/checkbox';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AccessFormComponent } from './access-form/access-form.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { ViewInvitationComponent } from './view-invitation/view-invitation.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllUsersComponent,
    ViewUserComponent,
    AccessFormComponent,
    UserSearchComponent,
    SearchResultsComponent,
    SearchDetailComponent,
    InvitationsComponent,
    ViewInvitationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ChartsModule,
    ButtonModule,
    InputModule,
    GridModule,
    DropDownListModule,
    CheckBoxModule,
    ModuleUtilitiesModule,
  ]
})
export class AdminModule { }
