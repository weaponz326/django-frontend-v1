import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { ViewNoteComponent } from './view-note/view-note.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllNotesComponent,
    ViewNoteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NotesModule { }
