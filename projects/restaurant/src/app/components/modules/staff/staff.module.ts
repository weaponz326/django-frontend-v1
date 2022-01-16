import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { GridModule } from 'smart-webcomponents-angular/grid';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllStaffComponent } from './all-staff/all-staff.component';
import { NewStaffComponent } from './new-staff/new-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { StaffFormComponent } from './staff-form/staff-form.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllStaffComponent,
    NewStaffComponent,
    ViewStaffComponent,
    StaffFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    GridModule,
    ButtonModule,
    InputModule,
    DropDownListModule,
    MultilineTextBoxModule,
    ModuleUtilitiesModule,
  ]
})
export class StaffModule { }
