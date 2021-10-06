import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StaffPageComponent } from './staff-page.component';
import { AllStaffComponent } from '../../../components/modules/staff/all-staff/all-staff.component';
import { NewStaffComponent } from '../../../components/modules/staff/new-staff/new-staff.component';
import { ViewStaffComponent } from '../../../components/modules/staff/view-staff/view-staff.component';
import { DashboardComponent } from '../../../components/modules/staff/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: "",
    component: StaffPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "all-staff", component: AllStaffComponent },
      { path: "new-staff", component: NewStaffComponent },
      { path: "view-staff", component: ViewStaffComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffPageRoutingModule { }
