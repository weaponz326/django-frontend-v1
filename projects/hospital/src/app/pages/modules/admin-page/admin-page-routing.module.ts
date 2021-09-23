import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from './admin-page.component';
import { DashboardComponent } from '../../../components/modules/admin/dashboard/dashboard.component';
import { SettingsComponent } from '../../../components/modules/admin/settings/settings.component';
import { AllUsersComponent } from '../../../components/modules/admin/all-users/all-users.component';
import { ViewUserComponent } from '../../../components/modules/admin/view-user/view-user.component';
import { InvitationsComponent } from '../../../components/modules/admin/invitations/invitations.component';
import { UserSearchComponent } from '../../../components/modules/admin/user-search/user-search.component';
import { ViewInvitationComponent } from '../../../components/modules/admin/view-invitation/view-invitation.component';


const routes: Routes = [
  {
    path: "",
    component: AdminPageComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'all-users', component: AllUsersComponent },
      { path: 'view-user', component: ViewUserComponent },
      { path: 'invitations', component: InvitationsComponent },
      { path: 'view-invitation', component: ViewInvitationComponent },
      { path: 'search', component: UserSearchComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
