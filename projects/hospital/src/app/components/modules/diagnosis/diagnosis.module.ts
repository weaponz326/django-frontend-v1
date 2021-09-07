import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllDiagnosisComponent } from './all-diagnosis/all-diagnosis.component';
import { AddDiagnosisComponent } from './add-diagnosis/add-diagnosis.component';
import { ViewDiagnosisComponent } from './view-diagnosis/view-diagnosis.component';
import { DiagnosisDetailsComponent } from './diagnosis-details/diagnosis-details.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllDiagnosisComponent,
    AddDiagnosisComponent,
    ViewDiagnosisComponent,
    DiagnosisDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DiagnosisModule { }
