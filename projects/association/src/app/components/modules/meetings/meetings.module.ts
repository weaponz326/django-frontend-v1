import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllMeetingsComponent } from './all-meetings/all-meetings.component';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { ViewMeetingComponent } from './view-meeting/view-meeting.component';
import { MeetingFormComponent } from './meeting-form/meeting-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllMeetingsComponent,
    AddMeetingComponent,
    ViewMeetingComponent,
    MeetingFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MeetingsModule { }
