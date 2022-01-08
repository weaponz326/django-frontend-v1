import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from '../../module-utilities/module-utilities.module';
import { NotesPrintModule } from '../../printing/notes-print/notes-print.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { ViewNoteComponent } from './view-note/view-note.component';
import { NewNoteComponent } from './new-note/new-note.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllNotesComponent,
    ViewNoteComponent,
    NewNoteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ChartsModule,
    ModuleUtilitiesModule,
    NotesPrintModule,
  ]
})
export class NotesModule { }
