import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMeetingsPrintComponent } from './all-meetings-print/all-meetings-print.component';
import { ViewMeetingPrintComponent } from './view-meeting-print/view-meeting-print.component';



@NgModule({
  declarations: [
    AllMeetingsPrintComponent,
    ViewMeetingPrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MeetingsPrintModule { }
