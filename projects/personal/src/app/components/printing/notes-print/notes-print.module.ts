import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllNotesPrintComponent } from './all-notes-print/all-notes-print.component';
import { ViewNotePrintComponent } from './view-note-print/view-note-print.component';



@NgModule({
  declarations: [
    AllNotesPrintComponent,
    ViewNotePrintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NotesPrintModule { }
