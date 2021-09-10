import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

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
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class AdminModule { }
