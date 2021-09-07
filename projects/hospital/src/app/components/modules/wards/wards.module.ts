import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllWardsComponent } from './all-wards/all-wards.component';
import { NewWardComponent } from './new-ward/new-ward.component';
import { ViewWardComponent } from './view-ward/view-ward.component';
import { WardFormComponent } from './ward-form/ward-form.component';
import { WardPatientsComponent } from './ward-patients/ward-patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { PatientFormComponent } from './patient-form/patient-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllWardsComponent,
    NewWardComponent,
    ViewWardComponent,
    WardFormComponent,
    WardPatientsComponent,
    AddPatientComponent,
    EditPatientComponent,
    PatientFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WardsModule { }
