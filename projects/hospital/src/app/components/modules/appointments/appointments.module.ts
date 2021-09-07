import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllAppointmentsComponent,
    AddAppointmentComponent,
    EditAppointmentComponent,
    AppointmentFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppointmentsModule { }
