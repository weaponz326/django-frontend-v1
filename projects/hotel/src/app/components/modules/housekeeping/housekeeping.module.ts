import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllHousekeepingComponent } from './all-housekeeping/all-housekeeping.component';
import { NewHousekeepingComponent } from './new-housekeeping/new-housekeeping.component';
import { ViewHousekeepingComponent } from './view-housekeeping/view-housekeeping.component';
import { HousekeepingChecklistComponent } from './housekeeping-checklist/housekeeping-checklist.component';
import { AddChecklistComponent } from './add-checklist/add-checklist.component';
import { EditChecklistComponent } from './edit-checklist/edit-checklist.component';
import { ChecklistFormComponent } from './checklist-form/checklist-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllHousekeepingComponent,
    NewHousekeepingComponent,
    ViewHousekeepingComponent,
    HousekeepingChecklistComponent,
    AddChecklistComponent,
    EditChecklistComponent,
    ChecklistFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HousekeepingModule { }
