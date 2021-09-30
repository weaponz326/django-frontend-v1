import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintAllNotesComponent } from './print-all-notes/print-all-notes.component';
import { PrintViewNoteComponent } from './print-view-note/print-view-note.component';



@NgModule({
  declarations: [
    PrintAllNotesComponent,
    PrintViewNoteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NotesPrintingModule { }
