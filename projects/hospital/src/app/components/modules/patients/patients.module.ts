import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { PatientFormComponent } from './patient-form/patient-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllPatientsComponent,
    NewPatientComponent,
    ViewPatientComponent,
    PatientFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PatientsModule { }
