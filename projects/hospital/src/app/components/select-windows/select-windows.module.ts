import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { BillComponent } from './bill/bill.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { NurseComponent } from './nurse/nurse.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { DrugComponent } from './drug/drug.component';
import { WardComponent } from './ward/ward.component';
import { AdmissionComponent } from './admission/admission.component';
import { DispensaryComponent } from './dispensary/dispensary.component';



@NgModule({
  declarations: [
    PatientComponent,
    AppointmentComponent,
    BillComponent,
    DoctorComponent,
    LaboratoryComponent,
    NurseComponent,
    PrescriptionComponent,
    DiagnosisComponent,
    DrugComponent,
    WardComponent,
    AdmissionComponent,
    DispensaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SelectWindowsModule { }
