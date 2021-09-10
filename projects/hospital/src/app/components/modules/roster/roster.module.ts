import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllRosterComponent } from './all-roster/all-roster.component';
import { NewRosterComponent } from './new-roster/new-roster.component';
import { ViewRosterComponent } from './view-roster/view-roster.component';
import { RosterSheetComponent } from './roster-sheet/roster-sheet.component';
import { ShiftsComponent } from './shifts/shifts.component';
import { AddShiftComponent } from './add-shift/add-shift.component';
import { EditShiftComponent } from './edit-shift/edit-shift.component';
import { ManageBatchesComponent } from './manage-batches/manage-batches.component';
import { AddBatchComponent } from './add-batch/add-batch.component';
import { EditBatchComponent } from './edit-batch/edit-batch.component';
import { ManageDoctorsComponent } from './personnel/manage-doctors/manage-doctors.component';
import { ManageNursesComponent } from './personnel/manage-nurses/manage-nurses.component';
import { ManageStaffComponent } from './personnel/manage-staff/manage-staff.component';
import { EditDoctorComponent } from './personnel/edit-doctor/edit-doctor.component';
import { EditNurseComponent } from './personnel/edit-nurse/edit-nurse.component';
import { EditStaffComponent } from './personnel/edit-staff/edit-staff.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllRosterComponent,
    NewRosterComponent,
    ViewRosterComponent,
    RosterSheetComponent,
    ShiftsComponent,
    AddShiftComponent,
    EditShiftComponent,
    ManageBatchesComponent,
    AddBatchComponent,
    EditBatchComponent,
    ManageDoctorsComponent,
    ManageNursesComponent,
    ManageStaffComponent,
    EditDoctorComponent,
    EditNurseComponent,
    EditStaffComponent
  ],
  imports: [
    CommonModule,
    // ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class RosterModule { }
