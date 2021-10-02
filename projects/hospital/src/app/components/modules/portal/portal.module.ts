import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { InputModule } from 'smart-webcomponents-angular/input';
import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { NewRinkComponent } from './new-rink/new-rink.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ViewRinkComponent } from './view-rink/view-rink.component';
import { PatientDetailsComponent } from './rink-details/patient-details/patient-details.component';
import { AppointmentDetailsComponent } from './rink-details/appointment-details/appointment-details.component';
import { StaffDetailsComponent } from './rink-details/staff-details/staff-details.component';
import { BillDetailsComponent } from './rink-details/bill-details/bill-details.component';
import { DoctorDetailsComponent } from './rink-details/doctor-details/doctor-details.component';
import { NurseDetailsComponent } from './rink-details/nurse-details/nurse-details.component';
import { LaboratoryDetailsComponent } from './rink-details/laboratory-details/laboratory-details.component';
import { PrescriptionDetailsComponent } from './rink-details/prescription-details/prescription-details.component';
import { DiagnosisDetailsComponent } from './rink-details/diagnosis-details/diagnosis-details.component';
import { AdmissionDetailsComponent } from './rink-details/admission-details/admission-details.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    SearchViewComponent,
    SearchResultsComponent,
    SearchDetailComponent,
    NewRinkComponent,
    TimelineComponent,
    ViewRinkComponent,
    PatientDetailsComponent,
    AppointmentDetailsComponent,
    StaffDetailsComponent,
    BillDetailsComponent,
    DoctorDetailsComponent,
    NurseDetailsComponent,
    LaboratoryDetailsComponent,
    PrescriptionDetailsComponent,
    DiagnosisDetailsComponent,
    AdmissionDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ChartsModule,
    ModuleUtilitiesModule,
    ButtonModule,
    InputModule,
    MultilineTextBoxModule,
  ]
})
export class PortalModule { }
